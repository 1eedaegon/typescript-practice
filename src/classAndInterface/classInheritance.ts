class Game {}
class Piece {}
class Position {}

class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pwan extends Piece {}

type Color = 'Black' | "White"
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
    constructor(private file: File, private rank: Rank) {}
}

// Must be override when use abstract
abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        private file: File,
        private rank: Rank
        ) {
            this.position = new Position(file, rank)
        }
}
// new Piece('White', 'B', 8) // error

abstract class Piece {
    moveTo(position: Position) {
        this.position = position;
    }
    abstract canMoveTo(position: Position): boolean
}

class Position {
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file - this.file)
        }
    }
}