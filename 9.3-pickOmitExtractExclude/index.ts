interface DataInfo {
    name: string
    age: number
    email: string
    phone: string
}

type OmitDataInfo = Omit<DataInfo, 'age'> // исключаем возраст

type PickDataInfo = Pick<DataInfo, 'age' | 'name'> // выбираем только возраст и имя

type ExtractDataInfo = Extract<'hello' | 'world' | DataInfo, string>  // выбираем только строки

type ExcludeDataInfo = Exclude<'hello' | 'world' | DataInfo, string> // исключаем строки


