type TypeObj = Record<string, number>

const obj: TypeObj = {
    A: 1,
    B: 2,
}

function swapKeysAndValues<T extends TypeObj>( data:T ): T {
    const result: T = {}

    for (let key in data) {
        let value
        switch (typeof data[key]) {
            case ('number'):
                value = data[key].toString()
            case ('string'):
                value = data[key]
            default:
                value = data[key]
        }
        result[value] = key.toString()          
    }
    return result
}