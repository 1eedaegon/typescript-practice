// Generator
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a+b]
    }
}
let fibonacciGenerator = createFibonacciGenerator();
fibonacciGenerator.next();

function* createNumbers(): IterableIterator<number> {
    let num = 0;
    while(1) {
        yield num++;
    }
}
let numIter = createNumbers();
numIter.next(); // 0
numIter.next(); // 1 .....

// Iterator
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