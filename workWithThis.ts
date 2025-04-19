class Payment {
    private date = new Date()

    getDate () {
        return this.date
    }

    getDateArrow = () => {
        return this.date
    }
}

class PaymentExtendable extends Payment {
    save () {
        // если нужно работать со стрелочной функцией используется this
        // return this.getDateArrow
        // иначе используется super, для того чтобы не терять контекст
        return super.getDate()
    }
}

const p1 = new Payment()

const u = {
    id: 1,
    paymantDate: p1.getDate(),
    paymentDateArrow: p1.getDateArrow()
}


const extendable1 = new PaymentExtendable()
console.log(extendable1.save())