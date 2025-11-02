import { PieceColor } from "./enums/PieceColor";
import { PieceType } from "./enums/PieceType";
import { Piece } from "./Piece";
import { Position } from "./Position";

export abstract class WhitePiece extends Piece {
    constructor(type: PieceType, position: Position, imageUrl?: string) {
        super(PieceColor.WHITE, type, position, imageUrl);
    }
}