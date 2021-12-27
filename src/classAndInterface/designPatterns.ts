
// Factory
type Shoe = {
    purpose: string
}
class BalletFlat implements Shoe {
    purpose = 'dancing'
}
class Boot implements Shoe {
    purpose = 'woodcutting'
}
class Sneaker implements Shoe {
    purpose: 'walking'
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch(type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}

// Builder
// new RequestBuilder().setURL('/users').setMethod('get').setData({ firstName: 'Anna' }).send()

class RequestBuilder {
    private url: string | null = null
    private method: 'get' | 'post' | null = null
    private data: object | null = null

    setURL(url: string): this {
        this.url = url
        return this
    }
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }
    setData(data: object): this {
        this.data = data
        return this
    }
    send() {
        
    }
}