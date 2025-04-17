class UserExtends {
    name: string;
    login: string;

    constructor(name: string, login: string) {
        this.name = name;
        this.login = login;
    }

    getInfo() {
        return {
          name: this.name,
          login: this.login   
        }
    }
}

class Admin extends UserExtends {
    isAdmin: boolean

    constructor() {
        const name = 'admin'
        const login = 'adminLogin'
        // супер вызываетчся первым, если необходимо произвести действие в родительском контрукторе, например консоль лог
        super(name, login)
        this.isAdmin = true
    }

    // использовать override, чтобы указать, что метод переопределяет метод родительского класса
    // someData - необязательный параметр

    override getInfo(someData?: string) {
        return {
            ...super.getInfo(),
            someData
        }
    }
}

class HttpError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
    }
}

const httpError = new HttpError('Not Found', 404)
console.log(httpError.message)
console.log(httpError.statusCode)
