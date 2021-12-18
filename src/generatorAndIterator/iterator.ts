
// Iterator
// Iterator has [Symbol.iterator]
// Iterable has next: () => { value, done }
let numbers = {
    *[Symbol.iterator]() {
        for(let i =1; i <= 10; i++){ 
            yield i;
        }
    }
}
for (const n of numbers){
    console.log(n)
}
let numberList: number[] = [...numbers]
let [one, two, ...others] = numbers 