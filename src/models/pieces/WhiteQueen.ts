import { WhitePiece } from "../WhitePiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";
import { WhiteRook } from "./WhiteRook";
import { WhiteBishop } from "./WhiteBishop";

export class WhiteQueen extends WhitePiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.QUEEN, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const rook = new WhiteRook(this.position);
        const bishop = new WhiteBishop(this.position);
        return [...rook.getPossibleMoves(), ...bishop.getPossibleMoves()];
    }
}