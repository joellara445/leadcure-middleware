'option explicit';

import { CreateUserDto } from "../data/dto/createuser.dto";
import { AppDataSource } from "../../src/data-source"
import { User } from "../models/user.model";
import { CreateUserResponse } from "../data/response/createuser.response";
import { ErrorCode } from "../common/utils/errors";
import * as bcrypt from 'bcrypt';
import { Constants } from "../common/utils/constants";
import { LoginUserDto } from '../data/dto/loginuser.dto';
import { LoginUserResponse } from "../data/response/loginuser.response";
import { Session } from "../models/session.model";

var jwt = require('jsonwebtoken');

async function register(createUserDto: CreateUserDto) {

  const { password, ...userData } = createUserDto;
  const userRepository = await AppDataSource.getRepository(User)
  const verification = await userRepository
    .createQueryBuilder("us")
    .andWhere("(us.email = :emal OR us.phone = :phone)")
    .setParameters({ emal: userData.email, phone: userData.phone }).getOne();
  if (verification) {
    if (verification['email'] === userData.email) {
      let response = new CreateUserResponse(0, ErrorCode.EMAILUNIQUE, "Email already exists", ErrorCode.EMAILUNIQUE.toString());
      return response;
    } else if (verification['phone'] === userData.phone) {
      let response = new CreateUserResponse(0, ErrorCode.PHONEUNIQUE, "Phone already exists", ErrorCode.PHONEUNIQUE.toString());
      return response;
    } else {
      let response = new CreateUserResponse(0, ErrorCode.UNKNOWN, "Email already exists", ErrorCode.UNKNOWN.toString());
      return response;
    }
  }



  try {
    const user = userRepository.create({ ...userData, password: bcrypt.hashSync(password, 3) });
    //this.emailServiceService.sendConfirmation(user.fullName, user.email);
    await userRepository.save(user);
    delete user.password;
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    console.log(token);
    return {
      user: {
        ...user, token: jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: { id: user.id, email: user.email }
        }, Constants.jsonToken)
      }
    };
  } catch (error) {
    let response = new CreateUserResponse(0, ErrorCode.UNKNOWN, "Error:" + error, ErrorCode.UNKNOWN.toString());
    return response;
  }
}

async function _saveSession(user: User, tokenPush: string) {
  const sessionRepository = await AppDataSource.getRepository(Session)
  if (tokenPush) await sessionRepository.delete({ tokenPush });
  await sessionRepository.delete({ user: { id: user.id } });
  const session = sessionRepository.create({ user, tokenPush });
  await sessionRepository.save(session);
}

async function login(loginUserDto: LoginUserDto) {
  const { password, email, tokenPush } = loginUserDto;
  const userRepository = await AppDataSource.getRepository(User)
  const user = await userRepository
    .findOne({
      where: { email },
      select: { email: true, password: true, passwordTemporary: true, id: true, roles: true, phone: true }
    });

  if (!user) {
    let response = new LoginUserResponse(0, ErrorCode.UNAUTHORIZED, "Error:" + ErrorCode.UNAUTHORIZED, ErrorCode.UNAUTHORIZED.toString());
    return response;
  }
  if (!bcrypt.compareSync(password, user.password) && !bcrypt.compareSync(password, user.passwordTemporary)) {
    let response = new LoginUserResponse(0, ErrorCode.UNAUTHORIZED, "Error:Credentials mismatch", ErrorCode.UNAUTHORIZED.toString());
    return response;
  }

  await _saveSession(user, tokenPush);
  delete user.password;
  delete user.passwordTemporary;
  return {
    ...user, token: jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: { id: user.id, email: user.email }
    }, Constants.jsonToken)
  };
}






module.exports = {
  register,
  login,
};