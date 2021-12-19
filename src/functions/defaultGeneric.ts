// Also, generics can have default values
type MySampleEvent<T = HTMLElement> = { 
    target: T,
    type: string
}

let buttonEvent: MySampleEvent<HTMLButtonElement> = {
    target: myButton,
    type: string
}

// Also, can use limited generic
type MyLimitedEvent<T extends HTMLElement> = {
    target: T,
    type: string
}