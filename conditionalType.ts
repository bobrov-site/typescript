interface HttpResponse <T extends 'success' | 'error'>{
    data: string[]
    status: T extends 'success' ? 'ok' : 'error'
}

const successResponse: HttpResponse<'success'> = {
    data: ['success'],
    status: 'ok'
}

const errorResponse: HttpResponse<'error'> = {
    data: ['error'],
    status: 'error'
}