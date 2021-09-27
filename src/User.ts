export default class User {
    code: number | undefined;
    name: string;
    email: string;

    constructor (name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
