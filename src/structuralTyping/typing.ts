// Structural typing (duck typing)
let c: {
    firstName: string,
    lastName: string,
} = {
    firstName: 'lee',
    lastName: 'daegon'
}
class PersonDuck {
    constructor(public firstName: string, public lastName: string ){}
}
c = new PersonDuck('hello', 'duck')


interface Vector2D {
    x: number;
    y: number;
}
function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x* v.x + v.y * v.y)
}

interface NamedVector2D {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector2D = { name: 'hello', x: 2, y:3};
// correct, but name is skipped
calculateLength(v)

let samp1: {
    b: number, // samp1 has property 'b' is type of number
    c?: number, // samp1 has property 'c' is type of number(Optional)
    [key: number]: boolean 
}