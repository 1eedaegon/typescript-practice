interface Vector2D {
    x: number;
    y: number;
}
function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x* v.x + v.y * v.y)
}

interface NamedVector2D {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector2D = { name: 'hello', x: 2, y:3};
// correct, ...
calculateLength(v)