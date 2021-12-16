// Strict length and type array => Tuple
let tup: [number] = [1]
let tup2: [string, number?] = ['hi'] // Also optional
let homo_tup2: ([string] | [string, number]) = ['hi'] // Same type tup2

// Hetero Array
let heteroArr: [string, ...string[]] = ['hello', 'a', 'b', 'c', 'd']

// Immutable Array
let as: readonly number[] = [1,2,3,4,5]
as.splice(1) // Error
as.slice() // True

type ImArray = readonly number[];
type ImArray2 = ReadonlyArray<string>
type ImArray3 = Readonly<string[]>

// Immutable Tuple
type ImTuple = readonly [number];
type ImTuple2 = readonly [number, string];
type ImTuple3 = Readonly<[number, string]>;