async function fetchData() {
    return await Promise.resolve('data!')
}

type AwaitedData = Awaited<ReturnType<typeof fetchData>> // возвращает данные без промиса, которые есть в функции

