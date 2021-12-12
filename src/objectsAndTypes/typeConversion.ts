interface INameable {
    name: string
}
let obj: object = { name: 'lee', age: 31 }
// obj.name <= Error: object has no 'name' 

// Two types of type assertion(Implecit conversion)
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
