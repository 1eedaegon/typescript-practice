// Basic
class Person {
    name?: string
    age?: number
}

// Access modifier
// Equivalent
// class Person2 {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// let gon: Person2 = new Person2('lee', 32)
class Person2 {
    constructor(public name: string, public age: number){}
}
let gon: Person2 = new Person2('lee', 32)

// Implements interface
// using access modifier
// Typescript is awesome isn't it?
interface IPerson {
    name: string,
    age: number
}
class Person3 implements IPerson {
    constructor(public name: string, public age: number) {}
}
const daegon: IPerson = new Person3('lee', 31);


// Abstract class
// Force implement name child class 
abstract class AbstractPerson4 {
    abstract name: string
    constructor(public age?: number){}
}

// Inheritance
class Person5 extends AbstractPerson4 {
    constructor(public name: string, age?: number){
        super(age)
    }
}

// static
class A {
    static initValue = 1
}