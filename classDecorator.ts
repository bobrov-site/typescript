interface IUserService {
    users: number
    getUsersNumber(): number
}
//инициализируются сверху вниз
@nullifyUsersAdvanced(100) // исполняется вторым
@doubleUsers // исполняется первым
class UserService implements IUserService {
    users = 1000

    @methodDecorator()
    getUsersNumber(): number {
        return this.users
    }
}

function nullifyUsers(target: Function) {
    target.prototype.users = 0
}

function nullifyUsersAdvanced(users: number) {
    console.log('init users', users)
    return function (target: Function) {
        target.prototype.users = users
    }
}

function methodDecorator(
) {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        console.log('target', target)
        console.log('propertyKey', propertyKey)
        console.log('descriptor', descriptor)
        const oldValue = descriptor.value
        if (oldValue) {
            descriptor.value = function(this: any) {
                console.log('new val')
                return oldValue.call(this)
            }
        }
        return descriptor
    }
}

// function doubleUsers<T extends { new (...args: any[]): {} }>(constructor: T) {
//     console.log('init doubleUsers')
//     return function (target: Function) {
//         target.prototype.users = target.prototype.users * 2
//     }
// }

function doubleUsers<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 2 * 2
    }
}

const userService = new UserService()


