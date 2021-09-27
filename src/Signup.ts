import User from "./User";
import UserDTO from "./UserDTO";
import UserRepository from "./UserRepository";

export default class Signup {
    userRepository: UserRepository;

    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    execute (userDTO: UserDTO): number {
        const user = new User(userDTO.name, userDTO.email);
        const code = this.userRepository.save(user);
        return code;
    }
}
