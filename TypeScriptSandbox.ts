interface User {
    name: string;
    age: number;
}

class UserService {
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    getUser(): User {
        return this.user;
    }
}

const michael: User = { name: 'Michael', age: 25 }
const service: UserService = new UserService(michael);
console.log(service.getUser());

let list: number[] = [1, 2, 3]
let otherList: Array<number> = [4, 5, 6]

// Declare a tuple type
let x: [string, number]
x = ['hello',  10]

enum Color {
    RED, BLUE, GREEN
}

let c: Color = Color.GREEN
let notSure: unknown = 4;
notSure = 'could be a string'
notSure = false;

function getValue(key: string): any {
    return 'something'
}

const myStr: string = getValue('a')

function warn(): void {
    console.log('This is my warning')
}

null
undefined

function error(message: string): never {
    throw new Error(message);
}

