import React from "react";
import { Piece as PieceModel } from "../../models/Piece";
import "./ChessCell.css";

type ChessCellProps = {
    x: number;
    y: number;
    piece?: PieceModel;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ChessCell({ x, y, piece, onClick }: ChessCellProps) {
    const isWhite = (x + y) % 2 === 0;

    return (
        <div
            id={`cell-${x}-${y}`}
            className={`cell ${isWhite ? "white" : "black"}`}
            onClick={onClick}
        >
            {piece && (
                <img
                    src={piece.getImageUrl()}
                    alt={`${piece.getColor()}-${piece.getType()}`}
                    draggable={false}
                    className="piece"
                />
            )}
        </div>
    );
}
