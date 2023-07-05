import Masonry from "@mui/lab/Masonry";
import React from "react";
import type { DescriptionToken } from "~/types/TailorTypes";

export default function DescriptionComponent({
  descriptionTokens,
}: {
  descriptionTokens: DescriptionToken[];
}) {
  return (
    <div className="my-1 grid grid-cols-4 gap-0.5">
      {descriptionTokens.map((descriptionToken, index) => (
        <div
          key={index}
          className="rounded-[8px] bg-white p-0 py-0.5 text-center text-[10px] font-semibold shadow-md shadow-neutral-500"
        >
          {descriptionToken.token}
        </div>
      ))}
    </div>
  );
}
