// It seems like any, isn'it?
let o: object = { name: 'jackleen', age: 100 }
o = { first: 1 }

interface IPerson {
    name: string
    age: number
}
let p: IPerson = { name: 'jack', age: 100 }
// Type error, that's right.
p = { first: 1}
p = { name: 'lee', age: 100, job: 'swe' }
const gon: IPerson = { name: 'lee', age: 32 } 

// Optional property
interface IAnimal {
    species: string,
    legs: number,
    wings?: number,
}
// No error.
let a: IAnimal = { species: 'wolf', legs: 4 }
a = { species: 'eagle', legs: 2, wings: 2}

// Anounymous inteface
// equivalance
// interface IMe {
//     name: string
//     age: number
//     etc?: boolean
// }
// function printMe(me: IMe) { console.log(me)}
function printMe(me: { name: string, age: number, etc?: boolean }){
    console.log(me)
}
printMe(gon)