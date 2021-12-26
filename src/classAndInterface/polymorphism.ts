class MyMap<K, V> {
    constructor(initialKey: K, initialValue: V) { }
    get(key: K): V { }
    set(key: K, value: V): void { }
    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> { }
    static of<K, V>(k: K, v: V): MyMap<K, V> {}
}