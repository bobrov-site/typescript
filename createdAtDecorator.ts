interface IUserServiceExample {
    users: number
    getUsersNumber(): number
}
@createdAt
class UserServiceExample implements IUserServiceExample {
    users = 1000
    getUsersNumber(): number {
        return this.users
    }
}

function createdAt<T extends { new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt = new Date()
    }
}

type CreatedAt = {
    createdAt: Date
}

const userServiceExample = new UserServiceExample() as IUserServiceExample & CreatedAt
userServiceExample.createdAt = new Date() //необходимо содать отдельный тип и закастовать через as
userServiceExample.getUsersNumber() // комплитятся так же свойства по умолчанию
