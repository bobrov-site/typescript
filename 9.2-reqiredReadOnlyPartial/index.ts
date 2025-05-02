interface SomeUserProps {
    name: string
    age: number
    email: string
}

type RequiredUser = Required<SomeUserProps> // все свойства становятся обязательными

type ReadonlyUser = Readonly<SomeUserProps> // все свойства становятся доступны только для чтения

type PartialUser = Partial<SomeUserProps> // все свойства становятся необязательными



