# Type system

> Welcome to typescript world

개발자를 너무 믿었던 자바스크립트의 undefined가 우리를 피곤하게 만들었다.

타입을 도입해서 피곤함에서 벗어나보자.



## 1. Typescript compiler

뭐 다른 언어들이 그렇듯 타입스크립트 역시 컴파일 과정이 있다.

다만 독특한 부분은 컴파일 결과가 자바스크립트 라는 것.(시스템에 따라 다르겠지만)

보통의 컴파일과정은 파싱 이후 AST를 만들고 바이트코드로 변환 후 런타임 평가가 되는데

타입스크립트는 AST로 만들고 타입체킹을 한다.

```mermaid
flowchart TB
subgraph Typescript complie
	subgraph Typescript
	a[.ts]-->b[Typescript AST]
	b--Type check-->b
	b-->c[.js]
	end
  c-->d
	subgraph Javascript
	d[.js]-->e[Javascript AST]
	e-->f[Bytecode]
	f--Runtime-->f
	end
end
```



## 2. Type inference

타입스크립트 컴파일러는 두 가지 타입지정 방식이 있다.

개발자가 어노테이션을 이용해 직접 지정하는 방식과 타입스크립트가 추론하게 하는 방식이다.

1. Explicit type inference

```typescript
let a: number = 1 // a는 number
let b: string = 'hello' // b는 string
let c: boolean[] = [true, false] // c는 boolean 배열
```

2. Implicit type inference

```typescript
let a = 1 // a는 number
let b = 'hello' // b는 string
let c = [true, false] // c는 boolean 배열
```

코드를 줄이기위해 Implicit하게 쓰자. 대신 타입 변환할 때는 반드시 명시적으로 해야한다.



**타입스크립트는 gradually typed 언어다.**

프로그램의 모든 타입을 컴파일러가 알고 있을 때 최상의 결과를 도출하지만 모든 타입을 알아야 할 필요는 없다.

자바스크립트는 개발자의 의도를 최대한 해석해서 `3+[1]` 을 31로 암시적 변환 후 평가한다.

타입스크립트는 `+` 연산자를 3과 [1]의 타입에 적용할 수 없어 에러를 도출한다.

타입스크립트는 컴파일 타임에 코드의 타입을 확인하기 때문에 실행 전에 문법에러와 타입에러 모두를 검출한다.