// Sub-type and Super-type
// 어떤 타입 A,B가 있고 B가 A의 서브타입이면 A가 필요한 곳에서 언제든 B를 쓸 수 있다.
// 복잡한 타입의 관계를 알아보자(언어마다 다름 ㅠㅠ..)

type ExistingUser = {
    id: number
    name: string
}
type NewUser = {
    name: string
}
function deleteUser(user: {id?: number, name: string}) {
    delete user.id // 파괴적인 갱신... 프로퍼티가 사라진다.
}
let existingUser: ExistingUser = {
    id: 1234,
    name: 'daegon'
}

deleteUser(existingUser) 
// 이럼에도 불구하고  ExistingUser 타입은
// { id?: number, name:string}의 서브타입이기 때문에 
// 여전히 existingUser.id의 타입을 number로 알아듣는다. undefined인데도...
// 타입스크립트는 빈번히 일어나는 일을 이론적으로 엄격하게 정의하지않고
// 일부 허용해서 컴파일러/프로그래밍언어론을 잘 몰라도 사용할 수 있게 만들었다. 

// 슈퍼타입을 서브타입에 넣는다면?
type LegacyUser = {
    id?: number | string
    name: string
}
let legacyUser: LegacyUser = {
    id: '7878',
    name: 'daegon'
}
deleteUser(legacyUser) // deleteUser는 number | undefined만 처리하는데 legacyUser는 string도 포함하므로 처리 불가(당연한거겠지...)

// 결론은 할당이나 전달할 때는 대상타입의 서브타입까지만 허용한다.
// 이를 B에 할당할 수 있는 A가 있다면 A의 프로퍼티는 B의 대응 프로퍼티에 대해 공변(covarient)이다.
// 예외적으로 매개변수는 반변(contravarient)이다. fuction(x,y){ //여기서 x,y가 매개변수 }
// A가 B의 서브타입이라면 A의 this타입과 매개변수는 B에 대응하는 this타입과 매개변수에 대해 슈퍼타입이어야한다.
// 그러면서 A의 리턴타입이 B의 리턴타입에 대해 서브타입이 아니어야한다.
// 타입의 가변성을 예시를 통해 알아보자

class Animal {}
class Bird extends Animal {
    chirp() {}
}
class Crow extends Bird {
    caw() {}
}
function chirp(bird: Bird){
    bird.chirp()
    return bird
}
// 흠.. 여기까지는 쉽다.
chirp(new Animal)
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {}

const birdToBird = (b: Bird):Bird =>{ return b}
clone(birdToBird)
const birdToCrow = (b: Bird):Crow =>{ return new Crow}
clone(birdToCrow)
const birdToAnimal = (b: Bird):Animal =>{ return new Animal}
clone(birdToAnimal)

// 
const animalToBird = (a: Animal):Bird => {return new Bird}
clone(animalToBird)
const crowToBird = (c: Crow): Bird => { return new Bird}
clone(crowToBird)