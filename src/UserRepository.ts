import User from "./User";

export default interface UserRepository {
    save(user: User): number;
    get(code: number): User | undefined;
}
