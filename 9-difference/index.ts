interface ObjA {
    a: number
    b: string
    d: boolean
}

interface ObjB {
    a: number
    c: boolean
    g: string
}

let a: ObjA = {
    a: 1,
    b: 'data',
    d: true
}

let b: ObjB = {
    a: 3,
    c: true,
    g: 'data'
}


const makeDiffrence = <A extends object, B extends object>(a: A, b: B): Omit<A, keyof B> => {
    const diff: Partial<A> = {}
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    for (let key of keysA) {
        if (!keysB.includes(key)) {
            diff[key as keyof A] = a[key as keyof A]
        }
    }
    return diff as Omit<A, keyof B>
}

const diff = makeDiffrence(a, b)