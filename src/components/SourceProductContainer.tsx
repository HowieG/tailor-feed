import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import type { ReferenceProduct, Product } from "~/types/TailorTypes";
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

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function SourceProductContainer({
  data,
}: {
  data: ReferenceProduct;
}) {
  return (
    <Box className="rounded-lg bg-tailorTan-200 p-6">
      <Image
        src={data.product.imgUrl}
        alt="Alt Text"
        loading="lazy"
        style={imageStyles}
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-full"
      />
      <DescriptionComponent
        descriptionTokens={stringToDescriptionTokenArray(testDescriptionTokens)}
      />
    </Box>
  );
}

// const Wrapper = () => {
//   return (
//     <div style={{ display: "inline-flex", padding: "8px" }}>
//       <Container></Container>
//     </div>
//   );
// };

// interface ContainerProps {
//   children: ReactNode;
// }

// const Container: React.FC<ContainerProps> = ({ children }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "middle",
//         boxSizing: "border-box",
//         cursor: "pointer",
//         width: "236px",
//         position: "sticky",
//         top: 0,
//         zIndex: 1,
//       }}
//     >
//       {children}
//     </div>
//   );
// };
