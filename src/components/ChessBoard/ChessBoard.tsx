import React, { useState, useEffect, useRef } from "react";
import { ChessBoard as ChessBoardClass } from "../../models/ChessBoard";
import { Piece as PieceModel } from "../../models/Piece";
import { Position } from "../../models/Position";
import "./ChessBoard.css";
import ChessCell from "./ChessCell";

export default function ChessBoard() {
    const chessRef = useRef<ChessBoardClass | null>(null);
    const [boardPieces, setBoardPieces] = useState<PieceModel[]>([]);
    const [selectedPiece, setSelectedPiece] = useState<PieceModel | null>(null);

    // Initialisation du plateau
    useEffect(() => {
        const board = new ChessBoardClass();
        chessRef.current = board;
        setBoardPieces(board.getAllPieces());
    }, []);

    const onPieceClick = (
        e: React.MouseEvent<HTMLDivElement>,
        piece?: PieceModel
    ) => {
        const cell = e.currentTarget;
        if (!cell || !chessRef.current) return;

        const possibleCase = cell.classList.contains("possible-move");
        resetHUD();
        console.log("Cell clicked :",  cell);
        
        // Si une pièce est sélectionnée et qu'on clique sur une case possible
        if (selectedPiece && possibleCase) {
            console.log("Déplacement de la pièce");
            
            const [_, x, y] = cell.id.split("-");
            const targetPosition = new Position(parseInt(x), parseInt(y));

            selectedPiece.moveTo(targetPosition);

            // ✅ On met à jour le state pour forcer un re-render
            setBoardPieces([...chessRef.current.getAllPieces()]);
            setSelectedPiece(null);
            return;
        }

        if (!piece) return;
        

        // Sélection d’une pièce
        cell.classList.add("selected-piece");
        setSelectedPiece(piece);

        const board = chessRef.current.getBoard();
        const acceptablePositions = piece.getPossibleMoves(board);

        for (const pos of acceptablePositions) {
            
            const cellEl = document.getElementById(`cell-${pos.x}-${pos.y}`);
            if (cellEl) cellEl.classList.add("possible-move");
        }
    };

    function resetHUD() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) =>
            cell.classList.remove("possible-move", "selected-piece")
        );
    }

    return (
        <div className="chessboard">
            {Array.from({ length: 8 }).map((_, y) =>
                Array.from({ length: 8 }).map((_, x) => {
                    const position = new Position(x, y);
                    const piece = chessRef.current?.getPieceAt(position);
                    return (
                        <ChessCell
                            key={`cell-${x}-${y}`}
                            x={x}
                            y={y}
                            onClick={(e) => onPieceClick(e, piece ?? undefined)}
                            piece={piece ?? undefined}
                        />
                    )
                })
            )}
        </div>
    );
}
