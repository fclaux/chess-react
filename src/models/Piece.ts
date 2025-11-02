import { PieceColor } from "./enums/PieceColor";
import { PieceType } from "./enums/PieceType";
import { Position } from "./Position";

export abstract class Piece {
    constructor(
        protected readonly color: PieceColor,
        protected readonly type: PieceType,
        protected position: Position,
        protected imageUrl?: string
    ) {}

    getColor(): PieceColor {
        return this.color;
    }

    getType(): PieceType {
        return this.type;
    }

    getPosition(): Position {
        return this.position;
    }

    getImageUrl(): string | undefined {
        return this.imageUrl;
    }

    moveTo(newPosition: Position): void {
        this.position = newPosition;
    }

    abstract getPossibleMoves(board: Piece[][]): Position[];
}
