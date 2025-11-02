import { WhitePiece } from "../WhitePiece";
import { Position } from "../Position";
import { PieceType } from "../enums/PieceType";

export class WhiteBishop extends WhitePiece {
    constructor(position: Position, imageUrl?: string) {
        super(PieceType.BISHOP, position, imageUrl);
    }

    getPossibleMoves(): Position[] {
        const moves: Position[] = [];
        const directions = [[1,1],[1,-1],[-1,1],[-1,-1]];
        for (const [dx, dy] of directions) {
            for (let i = 1; i < 8; i++) {
                const x = this.position.x + dx * i;
                const y = this.position.y + dy * i;
                if (x < 0 || x > 7 || y < 0 || y > 7) break;
                moves.push(new Position(x, y));
            }
        }
        return moves;
    }
}