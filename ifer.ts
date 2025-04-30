function getUser(id: string, data: {name: string, age: number}) {
    return data
}

type GetUserType<T> = T extends (...args: any[]) => infer DataTypeCustom ? DataTypeCustom : never //infer объявляет переменную DataTypeCustom, которая будет принимать тип данных, возвращаемый функцией

const dataSome: GetUserType<typeof getUser> = { //dataSome принимает тип данных, возвращаемый функцией getUser
    name: 'Jonh',
    age: 20
}