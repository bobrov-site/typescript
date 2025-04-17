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