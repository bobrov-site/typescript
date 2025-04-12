interface User {
    name: string
}

const obj = {
    name: 'hello'
}
// ассерты нужны для проверки, что обьект действительно является интерфейсом пользователя
function isUser (ob: unknown): asserts ob is User {
    if (typeof ob === 'object' && !!ob && 'name' in ob) {
        return
    }
    throw new Error('non')
}

isUser(obj)

obj.name = 'yes is user'