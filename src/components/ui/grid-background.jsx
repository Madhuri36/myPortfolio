"use client";
import { cn } from "../../lib/utils";

export function GridBackground({ className }) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        backgroundColor: "#0b0613",

        /* Grid lines */
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",

        /* Soft fade like reference */
        maskImage:
          "radial-gradient(circle at center, black 40%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 40%, transparent 75%)",
      }}
    />
  );
}