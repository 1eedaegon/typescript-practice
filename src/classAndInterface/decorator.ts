// Decorators
// java의 spring boot나 python의 Django, ts의 Nest.js에서 썼듯이 메타프로그래밍을 쉽게쉽게 가져가보자.

// @serializable은 APIPayload를 대체하는 새 클래스를 반환한다.
@serializable
class APIPayload {
    getValue(): Payload {
        // ...
    }
}
// 일반함수로 사용하면 이렇다.
let APIPayload = serializable(class APIPayload {
    getValue(): Payload {
        // ...
    }
})

// Typescript에서 기본 제공 decorator는 없다.
// decorator의 대상에 따른 기대 시그니처는 있으므로 거기에 따라주면 된다.
// ex) class decorator: (Constructor: {new(...any[]) => any}) => any
