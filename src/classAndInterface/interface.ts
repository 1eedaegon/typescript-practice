
interface Sushi {
    calories: number
    salty: boolean
    tasty: boolean
}

// hmmm 🙄
type Cake = {
    calories: number
    sweet: boolean
    tasty: boolean
}
type Sushi = {
    calories: number
    salty: boolean
    tasty: boolean
}
type Food = {
    calories: number
    tasty: boolean
}

// Better 🌟
type Food ={
    calories: number
    tasty: boolean
}
type Cake = Food & {
    salty: boolean
}
type Sushi = Food & {
    sweety: boolean
}

// Also
interface Food {
    calories: number
    tasty: boolean
}
interface Cake extends Food {
    sweety: Boolean
}
interface Sushi extends Food {
    salty: Boolean
}

// What is different?
// type은 할당 우측에 타입표현식을 포함한 모든 타입에 관한 표현이 가능
type B = A | string // 가능

// interface는 우측에 반드시 형태 `{}`가 나와야함

// interface는 또한 상속할 때 상위 인터페이스를 할당 할 수 있는 지 확인한다.
interface A {
    good(x: number): string
    bad(x: number): string
}
interface B extends A {
    good(x: string | number): string // Accept
    bad(x: string): string //  Error => 인터페이스 A를 올바르게 상속하지 않으며 number를 string에 할당할 수 없음
}
// 하지만 type은 intersection(&) 연산을 하면 bad를 override.


// Decalaration merging
// 동일한 이름의 interface가 여러개 선언되면 해당 interface가 합쳐진다.
// User has name
interface User {
    name: string
}
// interface has name, age
interface User {
    age: number
}
let ash: User = {
    name: 'Ashley',
    age: 30,
}
// interface merging은 같은 프로퍼티일 때 동작
interface User {
    firstName: string
}
interface User {
    firstName: number // Error: must have same type
}

// interface에 제네릭을 선언하면 interface merging 시에
// interface의 제네릭 이름과 프로퍼티 선언까지 같아야한다.
interface UserData<Height extends number> { // Error
    height: Height
}
interface UserData<Height extends string> { // Error
    height: Height
}
interface UserData { // Error
    height: number
}


// Implements
// 특정 인터페이스를 만족하게 강제할 수 있다.

interface Animal {
    eat(food: string): void
    sleep(hours: number): void
}

class Cat implements Animal {
    name: string
    sleep(hours: number): void {
        throw new Error('Method not implemented.')
    }
    eat(food: string) {
        console.info('Ate some', 'food', 'Mmm!')
    }
}

// Interface can be defined readonly
// But can't be defined access modifier
interface Animal {
    readonly name: string
    // ...
}

// Class can be defined multiple interface
interface Feline {
    meow(): void
}

abstract class Meet {
    constructor(private think: string) {}
}

class Met extends Meet implements Feline, Animal {
    name = 'Whiskers'
    eat(food: string) {
        console.info('Ate some', 'food', 'Mmm!')
    }
    sleep(hours: number) {
        console.info('Selpt for', 'hours', 'hours')
    }
    meow() {
        console.info('Meow!')
    }
}
const met = new Met('미리!!!')

// 추상클래스 vs 인터페이스
// extends 라는 개념부터 잡고 가자.(수학적으로는 class는 set + 고유 class지만...)
// 키워드 extends라는 뜻은 구현할 때 어떤 클래스의 sub-class(proper class) 라는 뜻이다.
// 그래서 자기자신을 extends하거나(러셀의 역설) 여러개를 extends하지 못하게 강제한다.(Set이 아닌 class이기 때문)
// 추상클래스는 이런 extends의 속성을 이용해서
// 아직 구체화하기 전인 abstract class를 하위의 class에서 정의하기 전에 쓰지 못하게 강제한다.
// 왜? 어떤 class는 공통적인 class로 묶을 수는 있지만 그대로 쓰기에 난감한 상황이 있기 때문이다.
// 어떤 생명체를 위한 항온시스템을 만드는 중 생명체에 대한 범주를 잡았다고 할 때, 
// 생명체는 생명과 체온이 있지만 살아남지 못하는 기준 온도는 종마다 각각 다르기 때문에 생명체 범주에서 기준 온도를 정하기 보다
// 생명체에 해당하는 각각의 범주에서 기준온도를 정하는 것이 낫기 때문이다.
// 그렇다고 생명체 전체의 기준온도를 하나의 property로 잡기엔 아니다.
// 그리고 생명체의 범주에서 기준온도를 잡지 못하게 강제하는 기능도 abstract에 같이 들어있다.

