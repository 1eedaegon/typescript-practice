// import { IPerson, makePerson } from './person/Person'
// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let lee: IPerson = makePerson('lee')
//     console.log(jane, lee)
// }

// testMakePerson();

// interface INameable {
//     name: string
// }
// const test = ():void => {

//     let obj: object = { name: 'lee', age: 31 }
//     // obj.name <= Error: object has no 'name' 
    
//     // Two types of type assertion(Implecit)
//     let name1 = (<INameable>obj).name
//     let name2 = (obj as INameable).name
//     console.log(name1, name2)
// }
// test();
import { testSignature } from './functionAndMethod/functionSignature';
testSignature();