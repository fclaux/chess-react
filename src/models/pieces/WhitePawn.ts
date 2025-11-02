import { WhitePiece } from "../WhitePiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class WhitePawn extends WhitePiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.PAWN, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const { x, y } = this.position;
        const forward = y + 1;
        const moves: Position[] = [];

        if (forward <= 7) moves.push(new Position(x, forward)); // avance simple
        if (y === 1 && forward + 1 <= 7) moves.push(new Position(x, forward + 1)); // double pas

        return moves;
    }
}