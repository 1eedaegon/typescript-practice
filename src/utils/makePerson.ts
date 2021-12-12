export function makePerson(name: string, age: number) {
    return { name, age }
}

export function testMakePerson() {
    console.log(makePerson('June', 20))
    console.log(makePerson('Lee', 31))
}