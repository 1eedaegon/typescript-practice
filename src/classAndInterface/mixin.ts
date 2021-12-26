// Mixins
// 인스턴스 프로퍼티같은 상태를 갖는다.
// 추상 메서드가 아닌 메서드를 제공한다.
// 생성자를 가질 수 있다. (클래스가 혼합된 순서대로)

// MultiUser에 대한 디버거를 만든다.
class MultiUser {
    // ...
}
MultiUser.debug(); // Evaluation result: 'User({"id": 1, "name": "daegon lee"})'

// How to implement
type ClassConstructor<T> = new (...args: any[]) => T

function withDebugger<C extends ClassConstructor<{ getDebugValue(): object }>>(Class: C) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name
            let value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

class HardToDebugUser {
    constructor(private id: number, private firstName: string, private lastName: string) {}
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User = withDebugger(HardToDebugUser)