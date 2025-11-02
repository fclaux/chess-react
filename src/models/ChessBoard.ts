import { Piece } from "./Piece";
import { Position } from "./Position";
import { PieceColor } from "./enums/PieceColor";
import { PieceType } from "./enums/PieceType";
import { createPiece } from "./PieceFactory";

export class ChessBoard {
    private board: (Piece | null)[][];

    constructor() {
        this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
        this.setupInitialPositions();
    }

    private setupInitialPositions() {
        for (let x = 0; x < 8; x++) {
            this.placePiece(createPiece(PieceColor.WHITE, PieceType.PAWN, new Position(x, 1), "/src/assets/pawns/white/normal/Chess_plt45.svg"));
            this.placePiece(createPiece(PieceColor.BLACK, PieceType.PAWN, new Position(x, 6), "/src/assets/pawns/black/normal/Chess_pdt45.svg"));
        }

        this.placePiece(createPiece(PieceColor.WHITE, PieceType.ROOK, new Position(0, 0), "/src/assets/pawns/white/normal/Chess_rlt45.svg"));
        this.placePiece(createPiece(PieceColor.WHITE, PieceType.ROOK, new Position(7, 0), "/src/assets/pawns/white/normal/Chess_rlt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.ROOK, new Position(0, 7), "/src/assets/pawns/black/normal/Chess_rdt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.ROOK, new Position(7, 7), "/src/assets/pawns/black/normal/Chess_rdt45.svg"));

        this.placePiece(createPiece(PieceColor.WHITE, PieceType.KNIGHT, new Position(1, 0), "/src/assets/pawns/white/normal/Chess_nlt45.svg"));
        this.placePiece(createPiece(PieceColor.WHITE, PieceType.KNIGHT, new Position(6, 0), "/src/assets/pawns/white/normal/Chess_nlt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.KNIGHT, new Position(1, 7), "/src/assets/pawns/black/normal/Chess_ndt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.KNIGHT, new Position(6, 7), "/src/assets/pawns/black/normal/Chess_ndt45.svg"));

        this.placePiece(createPiece(PieceColor.WHITE, PieceType.BISHOP, new Position(2, 0), "/src/assets/pawns/white/normal/Chess_blt45.svg"));
        this.placePiece(createPiece(PieceColor.WHITE, PieceType.BISHOP, new Position(5, 0), "/src/assets/pawns/white/normal/Chess_blt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.BISHOP, new Position(2, 7), "/src/assets/pawns/black/normal/Chess_bdt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.BISHOP, new Position(5, 7), "/src/assets/pawns/black/normal/Chess_bdt45.svg"));

        this.placePiece(createPiece(PieceColor.WHITE, PieceType.QUEEN, new Position(3, 0), "/src/assets/pawns/white/normal/Chess_qlt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.QUEEN, new Position(3, 7), "/src/assets/pawns/black/normal/Chess_qdt45.svg"));

        this.placePiece(createPiece(PieceColor.WHITE, PieceType.KING, new Position(4, 0), "/src/assets/pawns/white/normal/Chess_klt45.svg"));
        this.placePiece(createPiece(PieceColor.BLACK, PieceType.KING, new Position(4, 7), "/src/assets/pawns/black/normal/Chess_kdt45.svg"));
    }

    public placePiece(piece: Piece) {
        const { x, y } = piece.getPosition();
        this.board[y][x] = piece;
    }

    public getPieceAt(position: Position): Piece | null {
        return this.board[position.y][position.x];
    }

    public movePiece(piece: Piece, newPosition: Position): boolean {
        const { x: oldX, y: oldY } = piece.getPosition();
        const { x: newX, y: newY } = newPosition;

        if (newX < 0 || newX > 7 || newY < 0 || newY > 7) return false;

        const target = this.board[newY][newX];
        if (target && target.getColor() === piece.getColor()) return false;

        this.board[oldY][oldX] = null;
        piece.moveTo(newPosition);
        this.board[newY][newX] = piece;

        return true;
    }

    public getAllPieces(): Piece[] {
        return this.board.flat().filter((p): p is Piece => p !== null);
    }

    public getBoard(): (Piece | null)[][] {
        return this.board;
    }
}
