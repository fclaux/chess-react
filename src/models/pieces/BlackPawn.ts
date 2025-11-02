import { BlackPiece } from "../BlackPiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class BlackPawn extends BlackPiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.PAWN, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const { x, y } = this.position;
        const forward = y - 1;
        const moves: Position[] = [];

        if (forward >= 0) moves.push(new Position(x, forward)); // avance simple
        if (y === 6 && forward - 1 >= 0) moves.push(new Position(x, forward - 1)); // double pas

        return moves;
    }
}