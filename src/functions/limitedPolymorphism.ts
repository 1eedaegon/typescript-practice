// U includes at least T(Upper bound type)
// Example: B-tree

type TreeNode = {
    value: string
}
type LeafNode = TreeNode & {
    isLeaf: true
}
type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

let tree: TreeNode = {value: 'a'}
let leaf: LeafNode = {value: 'b', isLeaf: true}
let inner: InnerNode = {value: 'c', children: [leaf]}

// Error. no upper bound type: node.value is dangerous
// function mapNode<T>(node: T, f: (value: string) => string): T {
//     return { ...node, value: f(node.value) }
// }

// No error. but all types are 'TreeNode'
// function mapNode(node: TreeNode, f: (value: string) => string): T {
//     return { ...node, value: f(node.value) }
// }

// Correct.
function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
    return { ...node, value: f(node.value) }
}

let tree1 = mapNode(tree, _ => _.toUpperCase())
let leaf1 = mapNode(leaf, _ => _.toUpperCase())
let inner1 = mapNode(inner, _ => _.toUpperCase())



// Multiple type limit using intersection
type HasSides = { numberOfSides: number }
type SideHaveLength = { sideLength: number }

function logPerimeter<Shape extends HasSides & SideHaveLength>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
}

type Square = HasSides & SideHaveLength

let square: Square = {numberOfSides: 4, sideLength: 3}
logPerimeter(square)

// Implement call function with limited polymorphism

// First, define naiive using unknown
// function call(f: (...args: unknown[]) => unknown, ...args: unknown[]) {
//     return f(...args)
// }
function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}
// call(fill, 10, 'a')

// Second, Replace and re-define using generic
function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
    return f(...args)
}

let callA = call(fill, 10, 'a')
let callB = call(fill, 10) // Error. call has 3 arguments(fill(2) + callback(1)) but got 2
let callC = call(fill, 10, 'a', 'b', 'c') // Error. call has 3 arguments, but got 2

