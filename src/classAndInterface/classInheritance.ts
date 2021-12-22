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

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}


class Game {
    private pieces = Game.makePieces()
    private static makePieces() {}
    return {
        // Kings
        new King('White', 'E', 1)
        new King('Black', 'E', 8)
        // Queens
        new Queen('White', 'D', 1)
        new Queen('Black', 'D', 8)
        // Bishop
        new Bishop('White', 'C', 1)
        new Bishop('White', 'F', 1)
        new Bishop('Black', 'C', 8)
        new Bishop('Black', 'F', 8)
    }
}