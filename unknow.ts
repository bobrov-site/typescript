const getData = async() => {
    try {
        await fetch('/hello')
    }
    catch (e) {
        // проверка происходит через instanceOf или typeof
        if (e instanceof Error) {
            return e.message
        }
    }
} 