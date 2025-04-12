type paymentAction = 'refund' | 'checkout';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            break
        case 'checkout':
            break
        default:
            const _: never = action
            throw new Error(`нет такого action ${_}`)
    }
}