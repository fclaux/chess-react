import { BlackPiece } from "../BlackPiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class BlackKnight extends BlackPiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.KNIGHT, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const { x, y } = this.position;
        const movesOffsets = [
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1],
            [-2, 1],
            [-1, 2],
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
