import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import type { ReferenceProduct } from "~/types/TailorTypes";
import DescriptionComponent from "./DescriptionComponent";
import { stringToDescriptionTokenArray } from "~/utils";
import { testDescriptionTokens } from "~/data/test-data";

const imageStyles = {
  display: "flex",
  width: "100%",
  cursor: "click",
  borderRadius: "16px",
  objectFit: "cover" as const,
};

export default function SourceProductContainer({
  referenceProduct,
}: {
  referenceProduct: ReferenceProduct;
}) {
  return (
    <Box className="rounded-2xl bg-tailorTan-200 px-3 py-2 shadow-2xl">
      <a
        href={referenceProduct.product.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={referenceProduct.product.imgUrl}
          alt="Tailored Result"
          loading="lazy"
          style={imageStyles}
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
        />
      </a>
      <DescriptionComponent
        descriptionTokens={
          referenceProduct.product.description
            ? referenceProduct.product.description
            : stringToDescriptionTokenArray(testDescriptionTokens) // TODO: Remove once description non-optional
        }
      />
      <div className="mt-2 rounded-xl border-2 border-tailorTan-300 p-2 text-gray-600">
        {referenceProduct.feedback}
      </div>{" "}
      {/* TODO: Turn feedback into a component?  */}
    </Box>
  );
}
