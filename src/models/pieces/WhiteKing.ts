import { WhitePiece } from "../WhitePiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class WhiteKing extends WhitePiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.KING, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const { x, y } = this.position;
        const movesOffsets = [
            [1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]
        ];
        return movesOffsets
            .map(([dx, dy]) => new Position(x + dx, y + dy))
            .filter(pos => pos.x >= 0 && pos.x <= 7 && pos.y >= 0 && pos.y <= 7);
    }
}