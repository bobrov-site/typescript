class UserSetterAndGetter {
    _login: string = ''
    password: string = ''

    // можно указывать union типы, но тогда геттер автоматически становится юнион возвратом
    set login (l: string) {
        this._login = `user-${l}`
    }

    //если убрать сеттер, то _login будет readonly

    get login () {
        return this._login
    }

    // сеттеры и геттеры не могут быть асинхронными, лучше использовать методы
}

const userSetter = new UserSetterAndGetter()

userSetter._login = 'new login'

console.log(userSetter._login)