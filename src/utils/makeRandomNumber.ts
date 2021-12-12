let MAX_AGE = 100
export function makeRandomNumber(age: number = MAX_AGE): number {
    return Math.ceil((Math.random() * 100))
}
