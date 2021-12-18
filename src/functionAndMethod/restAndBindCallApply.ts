// No arguments object, use rest expression
function sumVariadicFunction(...numbers: number[]): number {
    return numbers.reduce((acc, next) => acc+next, 0)
}
sumVariadicFunction(...[1,2,3])

function add(a: number, b: number): number {
    return a+b;
}
add(10, 20)
add.apply(null, [10, 20])
add.call(null, 10, 20)
add.bind(10, 20)