import { WhitePiece } from "../WhitePiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class WhiteRook extends WhitePiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.ROOK, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const moves: Position[] = [];
        for (let i = 0; i < 8; i++) {
            if (i !== this.position.x) moves.push(new Position(i, this.position.y));
            if (i !== this.position.y) moves.push(new Position(this.position.x, i));
        }
        return moves;
    }
}