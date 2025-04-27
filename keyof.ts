interface IUser {
    name: string
    age: number
}

type KeysOfUser = keyof IUser


const key: KeysOfUser = 'name'

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const userTest: IUser = {
    name: 'hello',
    age: 1
}

const nameVal = getValue(userTest, 'name')

console.log(nameVal)
