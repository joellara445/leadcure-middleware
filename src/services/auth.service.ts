

export class AuthService {

    constructor(
        private readonly userRepository: Repository<User>)

        async register(createUserDto: CreateUserDto) {

            const { password, tokenPush, ...userData } = createUserDto;
        
            const verification = await this.userRepository.createQueryBuilder("us")
              .andWhere("(us.email = :emal OR us.phone = :phone)")
              .setParameters({ emal: userData.email, phone: userData.phone }).getOne();
        
            if (verification) {
              if (verification['email'] === userData.email) {
                throw new BadRequestException({ codeError: ErrorCode.EMAILUNIQUE });
              } else if (verification['phone'] === userData.phone) {
                throw new BadRequestException({ codeError: ErrorCode.PHONEUNIQUE });
              } else {
                throw new BadRequestException({ codeError: ErrorCode.UNKNOWN });
              }
            }
           
            try {
              const user = this.userRepository.create({ ...userData, password: bcrypt.hashSync(password, 3) });
              this.emailServiceService.sendConfirmation(user.fullName, user.email);
              await this.userRepository.save(user)
        
              await this._saveSession(user, userData.idDevice, tokenPush);
        
              try {
                const user = await admin.auth().createUser({
                  email: createUserDto.email,
                  emailVerified: false,
                  password: createUserDto.password,
                  displayName: createUserDto.image,
                  disabled: false,
                });
                const useremail = createUserDto.email;
                
                await admin.auth()
                .generateEmailVerificationLink(useremail, this.actionCodeSettings)
                .then(async (link) => {
                  console.log("Verification link:",link);
                  let body = "Verifica tu cuenta ingresando al siguiente link: "+link;
                  await this.emailServiceService.sendEmail(createUserDto.email,createUserDto.fullName,"Verifica tu cuenta",body);
                })
                .catch((error) => {
                  console.log("Err link:",error);
              // Some error occurred.
                });
               // return {
               //   response: user
               // };
              } catch (error) {
                console.log("Error test email"+error.message);
              }
        
              delete user.password;
              return { user: { ...user, token: this._getJwtToken({ id: user.id, email: user.email, idDevice: userData.idDevice }) } };
            } catch (error) {
              handleDbExceptions(error, this.logger);
            }
          }
        
          async login(loginUserDto: LoginUserDto) {
            const { password, email, idDevice, tokenPush } = loginUserDto;
            const user = await this.userRepository
              .findOne({
                where: { email },
                select: { image: true, email: true, password: true, passwordTemporary: true, id: true, roles: true, fullName: true, phone: true }
              });
        
            if (!user) {
              throw new UnauthorizedException('UnauthorizedException');
            }
        
            if (!bcrypt.compareSync(password, user.password) && !bcrypt.compareSync(password, user.passwordTemporary)) {
              throw new UnauthorizedException('UnauthorizedException');
            }
        
            await this._saveSession(user, idDevice, tokenPush);
            let verified = await admin.auth()
              .getUserByEmail(user.email)
              .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                
                console.log(`Successfully fetched user data: ${JSON.stringify(userRecord)}`);
                return userRecord.emailVerified;
              })
              .catch((error) => {
                console.log('Error fetching user data:', error);
                return false;
              });
              console.log("Verified:",verified);
              if (verified==false) {
                throw new UnauthorizedException('No verificado');
              }
        
            delete user.password;
            delete user.passwordTemporary; 
            return { ...user, token: this._getJwtToken({ id: user.id, email: user.email, idDevice }) };
          }
        

}

module.exports = AuthService;