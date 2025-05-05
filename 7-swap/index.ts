type TypeObj = Record<string, number>

type OutputObj = Record<string, string>

const someData: TypeObj = {
    A: 1,
    B: 2,
}

function swapKeysAndValues<T extends TypeObj>( data:T ): OutputObj {
    const result: OutputObj = {}
    for (let key in data) {
        result[`${data[key]}`] = `${key}`
                  
    }
    return result
}

swapKeysAndValues(someData)