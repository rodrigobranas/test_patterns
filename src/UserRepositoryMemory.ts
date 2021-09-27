import User from "./User";
import UserRepository from "./UserRepository";

export default class UserRepositoryMemory implements UserRepository {
    users: User[];

    constructor () {
        this.users = [];
    }

    save (user: User) {
        user.code = Math.floor(Math.random() * 100);
        this.users.push(user);
        return user.code;
    }

    get (code: number) {
        return this.users.find(user => user.code === code);
    } 
}
