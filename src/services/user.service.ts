import { AppDataSource } from "../../src/data-source"
import { UpdateUserDto } from "../data/dto/updateuser.dto";
import { User } from "../models/user.model";


async function findAll() {
    const userRepository = await AppDataSource.getRepository(User)
    return userRepository.find({});
}

async function findById(id) {
    const userRepository = await AppDataSource.getRepository(User)
    return userRepository.findOneBy({
        id: id,
    })
}

async function updateUser(user: UpdateUserDto) {
    const userRepository = await AppDataSource.getRepository(User)
    let entity: User = await userRepository.findOneBy({ id: user.id });
    entity.name = user.name;
    entity.lastName = user.lastName;
    entity.email = user.email;
    entity.phone = user.phone;
    return userRepository.save(entity);
}

async function getUsers() {
    const userRepository = await AppDataSource.getRepository(User)
    let entitys: User[] = await userRepository.find({});
    return entitys;
}



module.exports = {
    findAll,
    findById,
    updateUser,
    getUsers
};