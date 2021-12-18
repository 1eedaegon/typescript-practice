// Signature(deprecated)
// https://github.com/microsoft/TypeScript/issues/13152
let usingSignatrue: (string, number) => string = (sign: string, point: number) => `${sign} + ${point}`

// type alias
type aliasSignature = (string, number) => void

const basedSignature: aliasSignature = function(a: string, b: number): void { console.log('hello')}

export const testSignature = (): void => {
    console.log(basedSignature('gon', 32))
}

type cb = (clock: string) => number
type sampleHasCallback = (cb: cb, msg: string) => void

const hasCb: sampleHasCallback = function(cb, msg) {
    const clock = "this is clock";
    console.log(msg)
    cb(clock);
}
