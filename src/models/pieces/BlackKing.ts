import { BlackPiece } from "../BlackPiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class BlackKing extends BlackPiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.KING, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const { x, y } = this.position;
        const movesOffsets = [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
        ];
        return movesOffsets
            .filter(([dx, dy]) => {
                const newX = x + dx;
                const newY = y + dy;
                return newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7;
            })
            .map(([dx, dy]) => new Position(x + dx, y + dy));
    }
}
