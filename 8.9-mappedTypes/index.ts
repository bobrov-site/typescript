interface IForm {
    name: string
    password: string
    age: number
}

const form: IForm = {
    name: 'Вася',
    password: '123456',
    age: 20,
}

type FormValidation<T> = {
    [Property in keyof T]: {isValid: true} | {isValid: false, errorMessage: string}
}

const formValidation: FormValidation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Пароль должен быть длиннее 6 символов'},
    age: {isValid: true }
}

