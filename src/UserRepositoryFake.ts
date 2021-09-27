import User from "./User";
import UserRepository from "./UserRepository";

export default class UserRepositoryFake implements UserRepository {

    constructor () {
    }

    save (user: User) {
        user.code = Math.floor(Math.random() * 100);
        return user.code;
    }

    get (code: number) {
        return new User("ABC123", "abc@123.com");
    } 
}
