enum Status {
    SUCCESS = 'success',
    ERROR = 'error'
}

interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IRequestBody extends IPayment {}

interface IdataSuccess extends IPayment {
    databaseId: number
}

interface IdataError {
    errorMessage: string
    errorCode: number
}

// не лучший вариант
// interface IRequestResponse {
//     status: Status
//     data: IdataSuccess | IdataError
// }

interface IRequestResponseSuccess {
    status: Status.SUCCESS
    data: IdataSuccess
}

interface IRequestResponseError {
    status: Status.ERROR
    data: IdataError
}

async function makeRequest (body: IRequestBody): Promise<IRequestResponseSuccess | IRequestResponseError> {
    const response = await fetch('/url', {
        method: 'POST',
        body: JSON.stringify(body)
    })
    const data = response.json()
    return data
}

function isSuccess (response: IRequestResponseSuccess | IRequestResponseError): response is IRequestResponseSuccess {
    return response.status === Status.SUCCESS
}

function getDataBaseId (response: IRequestResponseSuccess | IRequestResponseError): number {
    if (isSuccess(response)) {
        return response.data.databaseId
    }
    return response.data.errorCode
}