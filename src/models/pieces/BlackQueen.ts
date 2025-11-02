import { BlackPiece } from "../BlackPiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";
import { BlackBishop } from "./BlackBishop";
import { BlackRook } from "./BlackRook";

export class BlackQueen extends BlackPiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.QUEEN, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const rook = new BlackRook(this.position);
        const bishop = new BlackBishop(this.position);
        return [...rook.getPossibleMoves(), ...bishop.getPossibleMoves()];
    }
}