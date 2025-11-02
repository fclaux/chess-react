import { Position } from "./Position";
import { PieceColor } from "./enums/PieceColor";
import { PieceType } from "./enums/PieceType";

// Pièces blanches
import { WhitePawn } from "./pieces/WhitePawn";
import { WhiteRook } from "./pieces/WhiteRook";
import { WhiteKnight } from "./pieces/WhiteKnight";
import { WhiteBishop } from "./pieces/WhiteBishop";
import { WhiteQueen } from "./pieces/WhiteQueen";
import { WhiteKing } from "./pieces/WhiteKing";

// Pièces noires
import { BlackPawn } from "./pieces/BlackPawn";
import { BlackRook } from "./pieces/BlackRook";
import { BlackKnight } from "./pieces/BlackKnight";
import { BlackBishop } from "./pieces/BlackBishop";
import { BlackQueen } from "./pieces/BlackQueen";
import { BlackKing } from "./pieces/BlackKing";

import { Piece } from "./Piece";

/**
 * Crée une pièce d'échecs selon la couleur, le type et la position.
 */
export function createPiece(
    color: PieceColor,
    type: PieceType,
    position: Position,
    imageUrl?: string
): Piece {
    switch (color) {
        case PieceColor.WHITE:
            switch (type) {
                case PieceType.PAWN: return new WhitePawn(position, imageUrl);
                case PieceType.ROOK: return new WhiteRook(position, imageUrl);
                case PieceType.KNIGHT: return new WhiteKnight(position, imageUrl);
                case PieceType.BISHOP: return new WhiteBishop(position, imageUrl);
                case PieceType.QUEEN: return new WhiteQueen(position, imageUrl);
                case PieceType.KING: return new WhiteKing(position, imageUrl);
            }
            break;
        case PieceColor.BLACK:
            switch (type) {
                case PieceType.PAWN: return new BlackPawn(position, imageUrl);
                case PieceType.ROOK: return new BlackRook(position, imageUrl);
                case PieceType.KNIGHT: return new BlackKnight(position, imageUrl);
                case PieceType.BISHOP: return new BlackBishop(position, imageUrl);
                case PieceType.QUEEN: return new BlackQueen(position, imageUrl);
                case PieceType.KING: return new BlackKing(position, imageUrl);
            }
            break;
    }
    throw new Error(`Invalid piece color/type combination: ${color}, ${type}`);
}
