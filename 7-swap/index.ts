type TypeObj = Record<string, number>

type OutputObj = Record<string, string>

const someData: TypeObj = {
    A: 1,
    B: 2,
}

function swapKeysAndValues<T extends TypeObj>( data:T ): OutputObj {
    const result: OutputObj = {}

    for (let key in data) {
        let value: number | string
        switch (typeof data[key]) {
            case ('number'):
                value = data[key].toString()
                break
            case ('string'):
                value = data[key]
                break
            default:
                value = data[key]
        }
        result[value] = key.toString()
                  
    }
    return result
}

swapKeysAndValues(someData)