interface Role {
    name: string
}

interface Permission {
    name: string
}

interface SomeUser {
    name: string
    roles: Role[]
    permission: Permission[]
}

const userData: SomeUser = {
    name: 'John',
    roles: [{name: 'admin'}],
    permission: [{name: 'read'}]
}

console.log(userData)

type UserRoles = SomeUser['roles'][number]['name'] // индексированый доступ к типу ролей

type UserPermission = SomeUser['permission'][number]['name'] // индексированый доступ к типу permission

type UserName = SomeUser['name'] // индексированый доступ к типу name

type UserRoles2 = SomeUser['roles'][number]['name'] // индексированый доступ к типу ролей

