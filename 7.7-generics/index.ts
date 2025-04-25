const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

const data2 = [
    { name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
]


const sortData = <T extends { id: number}>(data: T[], type: 'asc' | 'desc'): T[] => {
    return data.sort((a,b) => {
        if (type === 'asc') {
            return a.id - b.id
        } else {
            return b.id - a.id
        }
    })
}

sortData(data, 'asc')
sortData(data, 'desc')

// sortData(data2, 'asc') // error


