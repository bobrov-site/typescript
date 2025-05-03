class MyUserClass {
    name: string
    id: number

    constructor(
        name: string,
        id: number,
    ) {
        this.name = name
        this.id = id
    }

    getUserName (id: number): string {
        return this.name
    }
}

type MyUserGetNameType = ReturnType<MyUserClass['getUserName']> // this.name

type MyUserGetNameParams = Parameters<MyUserClass['getUserName']> // [id: number]

type MyUserClassParams = ConstructorParameters<typeof MyUserClass> // [name: string, id: number]

