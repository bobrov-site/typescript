abstract class UserAbstract {
    abstract handle() : void //абстрактные методы используется только внутри абстрактных классов

    handleNormal() {
        console.log('handle normal')
    }
}

class UserNormal extends UserAbstract {
    handle(): void {
        console.log('some handle absctract')
    }   
}
// const abstractUser = new UserAbstract() - error
const normalUser = new UserNormal()

normalUser.handle()
normalUser.handleNormal()

//можем подтягивать с абстрактных методов