import { AppDataSource } from "../../src/data-source"
import { UpdateUserDto } from "../data/dto/updateuser.dto";
import { User } from "../models/user.model";

export class UserService {

    constructor() {
    }

    async findAll() {
        const userRepository = await AppDataSource.getRepository(User)
        return userRepository.find({});
    }

    async findById(id) {
        const userRepository = await AppDataSource.getRepository(User)
        return userRepository.findOneBy({
            id: id,
        })
    }

    async updateUser(user: UpdateUserDto) {
        const userRepository = await AppDataSource.getRepository(User)
        let entity: User = await userRepository.findOneBy({ id: user.id });
        entity.name = user.name;
        entity.lastName = user.lastName;
        entity.email = user.email;
        entity.phone = user.phone;
        return userRepository.save(entity);
    }

    async getUsers() {
        const userRepository = await AppDataSource.getRepository(User)
        let entitys: User[] = await userRepository.find({});
        return entitys;
    }

}


module.exports = UserService;