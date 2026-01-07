"use client";

import React, { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}) => {
  const [activeCell, setActiveCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    if (row >= 0 && row < rows && col >= 0 && col < cols) {
      setActiveCell({ row, col });
      setRippleKey((k) => k + 1);
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden",
        "pointer-events-none",
        "[--cell-border-color:rgba(255,255,255,0.08)]",
        "[--cell-fill-color:rgba(255,255,255,0.02)]",
        "[--cell-shadow-color:rgba(255,90,30,0.45)]"
      )}
    >
      <DivGrid
        key={rippleKey}
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        activeCell={activeCell}
      />
    </div>
  );
};

const DivGrid = ({ rows, cols, cellSize, activeCell }) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, i) => i),
    [rows, cols]
  );

  return (
    <div
      className="relative mx-auto grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
      }}
    >
      {cells.map((idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;

        const distance = activeCell
          ? Math.hypot(activeCell.row - row, activeCell.col - col)
          : 0;

        const delay = distance * 45;
        const duration = 240 + distance * 60;

        return (
          <div
            key={idx}
            className="cell border opacity-40 animate-cell-ripple"
            style={{
              backgroundColor: "var(--cell-fill-color)",
              borderColor: "var(--cell-border-color)",
              boxShadow:
                "0 0 24px 1px var(--cell-shadow-color) inset",
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }}
          />
        );
      })}
    </div>
  );
};
