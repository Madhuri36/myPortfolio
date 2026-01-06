"use client";

import React, { useMemo, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const BackgroundRippleEffect = ({
  rows = 9,
  cols = 28,
  cellSize = 52,
}) => {
  const [activeCell, setActiveCell] = useState(null);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    if (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols
    ) {
      setActiveCell({ row, col });
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:rgba(255,255,255,0.08)]",
        "[--cell-fill-color:rgba(255,90,31,0.04)]",
        "[--cell-shadow-color:rgba(255,90,31,0.35)]"
      )}
    >
      <DivGrid
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        activeCell={activeCell}
      />
    </div>
  );
};

const DivGrid = ({
  rows,
  cols,
  cellSize,
  activeCell,
}) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, i) => i),
    [rows, cols]
  );

  return (
    <div
      className="absolute inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
        margin: "0 auto",
      }}
    >
      {cells.map((idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;

        const distance = activeCell
          ? Math.hypot(activeCell.row - row, activeCell.col - col)
          : 999;

        return (
          <div
            key={idx}
            className={cn(
              "border opacity-30 transition-all duration-300",
              distance < 3 && "animate-cell-ripple opacity-80"
            )}
            style={{
              backgroundColor: "var(--cell-fill-color)",
              borderColor: "var(--cell-border-color)",
              animationDelay: `${distance * 60}ms`,
            }}
          />
        );
      })}
    </div>
  );
};
