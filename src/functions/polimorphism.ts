function filter(array, f) {
    let result = []
    for(let i=0; i<array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}