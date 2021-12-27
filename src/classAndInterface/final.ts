class MessageQueue {
    private constructor(private messages: string[]){}
}

class BadQueue extends MessageQueue {} // marked as private. but also can't use constructor

new MessageQueue([])

class MQ {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
        return new MQ(messages)
    }
}
class BQ extends MQ {}
MQ.create([])