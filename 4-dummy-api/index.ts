import axios, { AxiosError } from "axios";

enum userBloodGroup {
    BPLUS = 'B+',
    BMINUS = 'B-',
    APLUS = 'A+',
    AMINUS = 'A-',
    OMINUS = 'O-',
    OPLUS = 'O+',
}

enum colors {
    RED = 'Red',
    GREEN = 'Green',
    GRAY = 'Gray',
    BLUE = 'Blue',
    PURPLE = 'Purple',
    BROWN = 'Brown'
}

enum hairType {
    CURLE = 'curle',
    STRAIGHT = 'Straight',
    WAVY = 'wavy',
    KINKY = 'kinky'
}

enum cardType {
    DISCOVER = 'discover',
    MAESTRO = 'maestro',
    MIR = 'mir',
    CARTEBANCAIRE = 'Carte Bancaire',
    UNIONPAY = 'UnionPay',

}

enum companyDepartament {
    TRAINING = 'Training',
    HUMANRESOURSES = 'Human Resources',
    LEGAL = 'LEGAL',
    ENGINEERING = 'Engineering',
    SALES = 'sales'
}

enum cryptoCoin {
    BITCOIN = 'bitcoin'
}

enum userRole {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user',
}

interface Company {
    departament: companyDepartament
    name: string
    title: string
    address: Address
}

interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: cardType
    iban: string
}

interface Coordinates {
    lat: number
    lng: number
}

interface Address {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates
    country: string
}

interface Crypto {
    coin: cryptoCoin
    wallet: string
    network: string
}

interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: 'female' | 'male'
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: userBloodGroup
    height: number
    weight: number
    eyeColor: colors
    hair: {
        color: colors
        type: hairType
    },
    ip: string,
    address: Address,
    macAddress: string
    university: string
    bank: Bank,
    company: Company,
    ein: string
    ssn: string
    userAgent: string
    crypto: Crypto
    role: userRole
}

const apiUrl: string = 'https://dummyjson.com/users'
 
async function getUsersRequest () {
    try {
        const response =  await axios.get(apiUrl)
        const users: Promise<User[]> = response.data
        return users
    }
    catch (e: unknown) {
        if (e instanceof AxiosError) {
            throw new Error(e.message)
        }
        else {
            throw new Error('Неизвестная ошибка')
        }
    }
}

console.log(getUsersRequest())
