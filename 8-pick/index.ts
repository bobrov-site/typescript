const userPick= {
    name: 'John',
    age: 30,
    skils: ['js', 'ts', 'react'],
}

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]): T {
    const result = {} as T
    for (const key of keys) {
        result[key] = obj[key]
    }
    return result
}

pickObjectKeys(userPick, ['name', 'age', 'none']) //none is not a key of userPick