// function is instance of Function class
let sample = new Function('x', 'y', 'return x + y')

// also expression - 1
function sample2(x: number, y: number) { return x + y }

// also expression to variable(first-class function) - 2 
// and function expression is lazy evaluation
let sample3 = function(x: number, y: number) { return x + y }

// function expression(one line execute after condition finished, no return)
const sample4 = (a: number, b: number): boolean => a > b;

// function execution(if no return, Can't observe result)
const sample5 = (a: number, b: number): boolean => { return a > b ;}

// First-class function(use callback)
// The fuction may assign as an argument since it is an expression
const sample6 = (callback: () => void): void => callback()

export const init = (callback: () => void): void => {
    callback()
}