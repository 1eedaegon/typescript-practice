// In javascript
let set = new Set
// Add
set.add(1)
set.add(2)
set.add(3)
// Has
set.has(2) // true
set.has(4) // false

// How to implement Set
// 메서드 체인을 위해 Set타입을 반환했다.
class Set {
    has(value: number): boolean {
        // return ...
    }
    add(value: number): Set{
        // return ...
    }
} 
// 하지만 상속 이후에 문제가 발생한다.
// 매 상속마다 오버라이드한다면 상속이 필요할까?
class MutableSet extends Set {
    delete(value: number): boolean {

    }
    add(value: number): MutableSet {}
}

// this를 타입으로 지정하고 반환하면 매 번 override하지 않아도
// 메서드 체인이 가능
class Set {
    add(value: number): this {
        return this
    }
}

class MutableSet extends Set {
    // ...
}