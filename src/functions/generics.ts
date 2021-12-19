// Generics
// Placeholder type

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
let filter: Filter = (array, f) => {
    let result = []
    for(let i=0; i<array.length; i++) {
        if(f(array[i])){
            result.push(array[i])
        }
    }
    return result;
}

filter([1,2,3,4], _=>_>2)
filter(['a','b','c','d'], _=>_==='b')
let names = [
    { firstName: 'lee'},
    { firstName: 'kim'},
    { firstName: 'park'}
]
filter(names, _=>_.firstName.startsWith('l'))

// Type contraint using generic
type ConstFilter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}
// Error.
let filter: ConstFilter = (array, f) => {
    let result = []
    for(let i=0; i<array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

// Number constraints
let numberFilter: ConstFilter<number> = (array, f) => {
    let result = []
    for(let i=0; i<array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

// Simple filter using generics
function advancedFilter<T>(array: T[], f: (item: T) => boolean): T[] {
    let result = []
    for(let i=0; i<array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

// Simple map using generics
function advancedMap<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for (let i=array.length-1; i>=0; i--) {
        result[i] = f(array[i])
    }
    return []
}
advancedMap(['a','b','c','d'], _=>_ !=='b')

// Implicit generic & union
advancedMap<number, boolean | number>([1,2,3,4,], _=>_>0)
advancedMap<string, boolean | string>(['a','b','c','d'], _=>_+'b')


// Use promise with generic
let promise = new Promise(resolve => resolve(45))
// It is just inferred as Object because there is no generic argument
promise.then(result => result * 4) // Object type is unknown,

// Solve, implecit generic
let implecitPromise = new Promise<number>(resolve => resolve(16))
implecitPromise.then(result => result * 4)

// Generic type alias
// 제네릭 타입 별칭(alias라는 단어의 한국어 표현이 힘들군 ....)
type MyEvent<T> = {
    target: T,
    type: string,
}

type ButtonEvent = MyEvent<HTMLButtonElement>

// Generic type alias with dom element
let myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector('#myButton'),
    type: 'click',
}

// Generic type alias with function signature
type TimedEvent<T> = {
    event: MyEvent<T>,
    from: Date,
    to: Date,
}
function triggerEvent<T>(event: MyEvent<T>): void {
    console.log(event)
}
triggerEvent(myEvent)