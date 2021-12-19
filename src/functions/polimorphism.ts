function filterOrigin(array, f) {
    let result = []
    for(let i=0; i<array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
// Meh... filter need expansion
filterOrigin([1,2,3,4], (_: number) => _ <3)

// So...
type FilterSimple = {
    (array: unknown, f: unknown) => unknown[]
}

// Need to be more specific
type FilterOrigin = {
    (array: number[], f: (item: number) => boolean): number[]
}

// Hey! filter needs expansion!
// Ok...
type FilterExpanded = {
    (array: number[], f:(item: number) => boolean): number[]
    (array: string[], f:(item: string) => boolean): string[]
}

// Hmm... still not enough
// Is it possible to have an array of objects?
// Maybe?
type FilterOverloaded = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: []) => boolean): object[] // NO! It's wrong
}

// Generics
// T is placeholder type(polymorphism type prameter)
type FilterTypeUsedGeneric = {
    <T>(array: T[], f: (item: T) => boolean): T[] // Profit!
}


