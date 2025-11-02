import { WhitePiece } from "../WhitePiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class WhiteKnight extends WhitePiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.KNIGHT, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const { x, y } = this.position;
        const movesOffsets = [
            [1, 2], [2, 1], [2, -1], [1, -2],
            [-1, -2], [-2, -1], [-2, 1], [-1, 2]
        ];
        return movesOffsets
            .map(([dx, dy]) => new Position(x + dx, y + dy))
            .filter(pos => pos.x >= 0 && pos.x <= 7 && pos.y >= 0 && pos.y <= 7);
    }
}