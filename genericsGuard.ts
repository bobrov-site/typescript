export interface SomeInterface {
    someProperty: string
}

const someFunc = <T extends SomeInterface>(value: T): T => {
    return value
}

someFunc({someProperty: 'test'})
someFunc({someProperty: 'test2'})
// someFunc('test') error