import React from "react";
import { Piece as PieceModel } from "../../models/Piece";
import "./ChessCell.css";

export default function ChessCell(x: number, y: number, onClick: () => void, piece?: PieceModel) {

    const isWhite = (x + y) % 2 === 0;

    return (
        <div
            key={`${x}-${y}`}
            className={`cell ${isWhite ? "white" : "black"}`}
            onClick={onClick}
        >
            {piece && (
                <img
                    src={piece.getImageUrl()}
                    alt={`${piece.getColor()}-${piece.getType()}`}
                    draggable="false"
                    className="piece"
                />
            )}
        </div>
    );
}
