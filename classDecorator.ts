interface IUserService {
    users: number
    getUsersNumber(): number
}
@doubleUsers
@nullifyUsers
class UserService implements IUserService {
    users = 1000

    getUsersNumber(): number {
        return this.users
    }
}

function nullifyUsers(target: Function) {
    target.prototype.users = 0
}

function doubleUsers<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = constructor.prototype.users * 2
    }
}

const userService = new UserService()


