import React from "react";
import type { DescriptionToken } from "~/types/TailorTypes";
import { mapSentimentToColor } from "~/utils";

const tokenTextStyles = {
  fontFamily: "Ysabeau SC, sans-serif",
  fontWeight: "500",
  fontSize: "12px",
  textAlign: "center" as const,
};

export default function DescriptionComponent({
  descriptionTokens,
}: {
  descriptionTokens: DescriptionToken[];
}) {
  // Sort the descriptionTokens array by sentiment
  const sortedTokens = [...descriptionTokens];

  // Sort the prioritizedTokens array by sentiment in descending order
  sortedTokens.sort((a, b) => (b.sentiment || 0) - (a.sentiment || 0));

  return (
    <div className="my-1 grid grid-cols-4 gap-1">
      {sortedTokens.map((descriptionToken, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-[8px] bg-white py-1 shadow-md shadow-neutral-500"
          style={{
            ...tokenTextStyles,
            backgroundColor: mapSentimentToColor(
              descriptionToken.sentiment ? descriptionToken.sentiment : 0
            ),
          }}
        >
          {descriptionToken.token}
        </div>
      ))}
    </div>
  );
}
