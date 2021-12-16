type Age = number
type Name = string

type PersonOne = {
    age: Age
    name: Name
}

let age: Age =55;
let driver: PersonOne = {
    name: 'lee',
    age,
}

// Type shadowing
type Color = 'red';
let x = Math.random() < .5
if(x) {
    type Color = 'blue'
    let b: Color = 'blue'
} else {
    let c: Color = 'red'
}