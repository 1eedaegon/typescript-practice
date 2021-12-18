// Convert dynamic overload to static type system
// 표현력 높은 api를 위한 타입 오버로딩

// Call signature(simplify) - 1
type Log = (message: string, userId?: string) => void
// Call signature -2
type Log = {
    (message: string, userId?: string): void
}

// Now, Function type overloading
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

// Implement using type union
let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string // because overloaded second type
)
// Wrong practice
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (from: Date, toOrDestination: Date | string, destination?: string): Reservation // This is wrong!
}


// Type overload on DOM API
type TABLE = 'table'
type CANVAS = 'canvas'
type A_TAG = 'a'
type CreateElement = {
    (tag: A_TAG): HTMLAnchorElement
    (tag: CANVAS): HTMLCanvasElement
    (tag: TABLE): HTMLTableElement
    (tag: string): HTMLElement // default
}   
let createElement: CreateElement = (tag: string | TABLE | CANVAS | A_TAG): HTMLElement => { 
    return document.createElement(tag);
}