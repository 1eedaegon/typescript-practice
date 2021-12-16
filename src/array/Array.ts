// Array support concatenation, pushing, searching, slicing
let unionAr = [1, 'a']
unionAr.push(1) // True
unionAr.push('b') // Also true

let homoAr = [1]
homoAr.push('a') // Error
homoAr.push(2) // True
let homoAr2: number[] = [] // Also array of number

let heteroAr = [] // Type: any

function typeExpansion(): (string | number)[] {
    const arr = [] // any
    arr.push('a') // string
    arr.push(1) // string | number
    return arr // type fix
}

const arr = typeExpansion()
arr.push(true) // Error
