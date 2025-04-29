const userExample = {
    name: 'hello'
}

type keyOfUser = keyof typeof userExample;

const data: keyOfUser = 'name' //автокомплит от userExample

enum Status {
    success,
    error
}

const statuses: keyof typeof Status = 'ERROR'