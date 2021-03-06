
interface Sushi {
    calories: number
    salty: boolean
    tasty: boolean
}

// hmmm ๐
type Cake = {
    calories: number
    sweet: boolean
    tasty: boolean
}
type Sushi = {
    calories: number
    salty: boolean
    tasty: boolean
}
type Food = {
    calories: number
    tasty: boolean
}

// Better ๐
type Food ={
    calories: number
    tasty: boolean
}
type Cake = Food & {
    salty: boolean
}
type Sushi = Food & {
    sweety: boolean
}

// Also
interface Food {
    calories: number
    tasty: boolean
}
interface Cake extends Food {
    sweety: Boolean
}
interface Sushi extends Food {
    salty: Boolean
}

// What is different?
// type์ ํ ๋น ์ฐ์ธก์ ํ์ํํ์์ ํฌํจํ ๋ชจ๋  ํ์์ ๊ดํ ํํ์ด ๊ฐ๋ฅ
type B = A | string // ๊ฐ๋ฅ

// interface๋ ์ฐ์ธก์ ๋ฐ๋์ ํํ `{}`๊ฐ ๋์์ผํจ

// interface๋ ๋ํ ์์ํ  ๋ ์์ ์ธํฐํ์ด์ค๋ฅผ ํ ๋น ํ  ์ ์๋ ์ง ํ์ธํ๋ค.
interface A {
    good(x: number): string
    bad(x: number): string
}
interface B extends A {
    good(x: string | number): string // Accept
    bad(x: string): string //  Error => ์ธํฐํ์ด์ค A๋ฅผ ์ฌ๋ฐ๋ฅด๊ฒ ์์ํ์ง ์์ผ๋ฉฐ number๋ฅผ string์ ํ ๋นํ  ์ ์์
}
// ํ์ง๋ง type์ intersection(&) ์ฐ์ฐ์ ํ๋ฉด bad๋ฅผ override.


// Decalaration merging
// ๋์ผํ ์ด๋ฆ์ interface๊ฐ ์ฌ๋ฌ๊ฐ ์ ์ธ๋๋ฉด ํด๋น interface๊ฐ ํฉ์ณ์ง๋ค.
// User has name
interface User {
    name: string
}
// interface has name, age
interface User {
    age: number
}
let ash: User = {
    name: 'Ashley',
    age: 30,
}
// interface merging์ ๊ฐ์ ํ๋กํผํฐ์ผ ๋ ๋์
interface User {
    firstName: string
}
interface User {
    firstName: number // Error: must have same type
}

// interface์ ์ ๋ค๋ฆญ์ ์ ์ธํ๋ฉด interface merging ์์
// interface์ ์ ๋ค๋ฆญ ์ด๋ฆ๊ณผ ํ๋กํผํฐ ์ ์ธ๊น์ง ๊ฐ์์ผํ๋ค.
interface UserData<Height extends number> { // Error
    height: Height
}
interface UserData<Height extends string> { // Error
    height: Height
}
interface UserData { // Error
    height: number
}


// Implements
// ํน์  ์ธํฐํ์ด์ค๋ฅผ ๋ง์กฑํ๊ฒ ๊ฐ์ ํ  ์ ์๋ค.

interface Animal {
    eat(food: string): void
    sleep(hours: number): void
}

class Cat implements Animal {
    name: string
    sleep(hours: number): void {
        throw new Error('Method not implemented.')
    }
    eat(food: string) {
        console.info('Ate some', 'food', 'Mmm!')
    }
}

// Interface can be defined readonly
// But can't be defined access modifier
interface Animal {
    readonly name: string
    // ...
}

// Class can be defined multiple interface
interface Feline {
    meow(): void
}

abstract class Meet {
    constructor(private think: string) {}
}

class Met extends Meet implements Feline, Animal {
    name = 'Whiskers'
    eat(food: string) {
        console.info('Ate some', 'food', 'Mmm!')
    }
    sleep(hours: number) {
        console.info('Selpt for', 'hours', 'hours')
    }
    meow() {
        console.info('Meow!')
    }
}
const met = new Met('๋ฏธ๋ฆฌ!!!')

// ์ถ์ํด๋์ค vs ์ธํฐํ์ด์ค
// extends ๋ผ๋ ๊ฐ๋๋ถํฐ ์ก๊ณ  ๊ฐ์.(์ํ์ ์ผ๋ก๋ class๋ set + ๊ณ ์  class์ง๋ง...)
// ํค์๋ extends๋ผ๋ ๋ป์ ๊ตฌํํ  ๋ ์ด๋ค ํด๋์ค์ sub-class(proper class) ๋ผ๋ ๋ป์ด๋ค.
// ๊ทธ๋์ ์๊ธฐ์์ ์ extendsํ๊ฑฐ๋(๋ฌ์์ ์ญ์ค) ์ฌ๋ฌ๊ฐ๋ฅผ extendsํ์ง ๋ชปํ๊ฒ ๊ฐ์ ํ๋ค.(Set์ด ์๋ class์ด๊ธฐ ๋๋ฌธ)

// ์ถ์ํด๋์ค๋ ์ด๋ฐ extends์ ์์ฑ์ ์ด์ฉํด์
// ์์ง ๊ตฌ์ฒดํํ๊ธฐ ์ ์ธ abstract class๋ฅผ ํ์์ class์์ ์ ์ํ๊ธฐ ์ ์ ์ฐ์ง ๋ชปํ๊ฒ ๊ฐ์ ํ๋ค.
// ์? ์ด๋ค class๋ ๊ณตํต์ ์ธ class๋ก ๋ฌถ์ ์๋ ์์ง๋ง ๊ทธ๋๋ก ์ฐ๊ธฐ์ ๋๊ฐํ ์ํฉ์ด ์๊ธฐ ๋๋ฌธ์ด๋ค.

// ์๋ช์ฒด๋ค์ ์ํ ํญ์จ์์คํ์ ๋ง๋๋ ์ค ์๋ช์ฒด์ ๋ํ ๋ฒ์ฃผ๋ฅผ ์ก์๋ค๊ณ  ํ  ๋, 
// ์๋ช์ฒด๋ ์๋ช๊ณผ ์ฒด์จ์ด ์์ง๋ง ์ด์๋จ์ง ๋ชปํ๋ ๊ธฐ์ค ์จ๋๋ ์ข๋ง๋ค ๊ฐ๊ฐ ๋ค๋ฅด๊ธฐ ๋๋ฌธ์ ๊ธฐ์ค์จ๋๋ฅผ ์ ํ๊ธฐ ์ ๋งคํ๋ค.
// ๊ทธ๋ ๋ค๊ณ  ์๋ช์ฒด ์ ์ฒด์ ๊ธฐ์ค์จ๋๋ฅผ ํ๋์ property๋ก ์ก์ ์ ์๋ค. 
// ์ด ๋ ์๋ช์ฒด ๋ฒ์ฃผ์์ ๊ธฐ์ค ์จ๋๋ฅผ ์ ํ๊ธฐ ๋ณด๋ค ์๋ช์ฒด์ ํด๋นํ๋ ๊ฐ๊ฐ์ ๋ฒ์ฃผ์์ ๊ธฐ์ค์จ๋๋ฅผ ์ ํ๋ ๊ฒ์ด ๋ซ๋ค.
// `abstract class ์๋ช์ฒด`๋ก ๋ง๋ค๊ณ  abstract method๋ก `getLethalTemperature`๋ก ๊ตฌํํ๋ฉด
// `class Human extends ์๋ช์ฒด {}`๋ฅผ ํ  ์ ์์ผ๋ฉด์ `class ์๋ช์ฒด {}`๋ ๋ฐฉ์งํ  ์ ์๋ค.

// ์ธํฐํ์ด์ค๋ ์ ์ธ์  ํ์ฅ๊ณผ ๋ค์ค์์์ ํตํด ํํ๋ฅผ ์ ์ํ  ์ ์๋ค.
// ๊ฐ ์์ค์์ ์ ์ํ  ์ ์์ผ๋ฏ๋ก class, ๊ฐ์ฒด, ์ธํฐํ์ด์ค๋ฅผ ์์ํ  ์ ์๋ค.
// ์ฆ, ํด๋์ค๋ฅผ ์ ์ํ  ๋ implements๋ก ์ฌ๋ฌ๊ฐ๊ฐ ๊ฐ๋ฅํ๋ฏ๋ก ํ๋กํผํฐ์ has-a ๊ด๊ณ๋ก ์ฌ์ฉํ๋ฉด ์ข๋ค.