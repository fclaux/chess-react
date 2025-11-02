import React, { useState, useEffect, useRef } from "react";
import { ChessBoard as ChessBoardClass } from "../../models/ChessBoard";
import { Piece as PieceModel } from "../../models/Piece";
import "./ChessBoard.css";
import ChessCell from "./ChessCell";
import { Position } from "../../models/Position";

export default function ChessBoard() {
    const chessRef = useRef<ChessBoardClass | null>(null);
    const [boardPieces, setBoardPieces] = useState<PieceModel[]>([]);

    useEffect(() => {
        chessRef.current = new ChessBoardClass();
        setBoardPieces(chessRef.current.getAllPieces());
    }, []);

    const onPieceClick = (piece?: PieceModel) => {
        //Reset les highlights
        const cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove("possible-move", "selected-piece");
        }

        if (!piece) {
            return;
        }

        // Mettre la cellule en surbrillance
        const cell = document.getElementsByClassName("cell")[
            piece.getPosition().y * 8 + piece.getPosition().x
        ];
        cell.classList.add("selected-piece");


        const board =
            (chessRef.current
                ?.getBoard()
                .map((row) =>
                    row.filter((cell) => cell !== null)
                ) as PieceModel[][]) ?? [];
        const acceptablePosition = piece.getPossibleMoves(board);

        for (const pos in acceptablePosition) {
            //Récup la key de la cell pour modifier sa couleur
            const cell =
                document.getElementsByClassName("cell")[
                    acceptablePosition[pos].y * 8 + acceptablePosition[pos].x
                ];
            cell.classList.add("possible-move");
        }
    };

    return (
        <div className="chessboard">
            {chessRef.current &&
                Array.from({ length: 8 }).map((_, y) =>
                    Array.from({ length: 8 }).map((_, x) => {
                        const position = new Position(x, y);
                        const piece = chessRef.current!.getPieceAt(position);

                        return ChessCell(
                            x,
                            y,
                            () => onPieceClick(piece ?? undefined),
                            piece ?? undefined
                        );
                    })
                )}
        </div>
    );
}
