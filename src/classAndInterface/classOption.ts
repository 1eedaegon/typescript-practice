// Class support structed-based types
// 타입스크립트는 무려 객체지향에 가까운 구조기반 타입을 지원한다.
class Zebra {
    trot(){}
}
class Poodle {
    trot(){}
}

function ambleAround(animal: Zebra) {
    animal.trot()
}

let zebra = new Zebra();
let poodle = new Poodle();

ambleAround(zebra)
ambleAround(poodle) // Also true

// private, protected 접근제어자가 있는 경우가 아니라면
// 이 둘은 같은 프로퍼티를 갖고 있으므로 같은 구조이다.
class A {
    private x =1
}
class B extends A {}
function f(a: A){}
f(new A)
f(new B) // Also true

f({ x: 1}) // But Can't be assign
// 접근제한자에 의해 할당을 하지 못한다.

// class declares both values and types
// 타입스크립트는 거의 값 아니면 타입이다.

type State = {
    [key: string]: string
}

class StringDatabase {
    state: State = {}
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string) {
        this.state[key] = value
    }
    static from(state: State) {
        let db = new StringDatabase()
        for (let key in state) {
            db.set(key, state[key])
        }
        return db;
    }
}

// typeof new StringDatebase()
// interface StringDatabase {
//     state: State
//     get(key: string): string| null
//     set(ket:string, value: string): void
// }

// typeof StringDatabase
// interface StringDatabaseConstructor {
//     new(): StringDatabase
//     from(state: State): StringDatabase
// }

// new는 constructor signature
// 타입스크립트 관점에서 class는 new()로 인스턴스할 수 있는 어떤 것임.

// 아래 생성자를 고치면
// class StringDatabase {
//     constructor(public state: State={}){}
//     // ...
// }
// typeof StringDatabase는 
// interface StringDatabase {
//     new(state?: State): StringDatabase
//     from(state: State): StringDatabase
// }
// 로 바뀐다.
// 다시 주의할 점은 여기서 typeof는 값을 가리키는 자바스크립트와 다르게 
// 타입을 가리킨다.
