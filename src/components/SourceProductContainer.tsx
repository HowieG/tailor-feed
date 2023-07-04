import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import type { ReferenceProduct, Product } from "~/types/TailorTypes";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const Wrapper = () => {
  return (
    <div style={{ display: "inline-flex", padding: "8px" }}>
      <Container></Container>
    </div>
  );
};

const imageStyles = {
  display: "flex",
  width: "100%",
  cursor: "click",
  borderRadius: "16px",
  objectFit: "cover" as const,
};

const Container = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "middle",
        boxSizing: "border-box",
        cursor: "pointer",
        width: "236px",
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt="unsplash"
        style={imageStyles}
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
};

export default function SourceProductContainer({
  data,
}: {
  data: ReferenceProduct;
}) {
  return (
    <Box>
      <img
        src={`${data.product.imgUrl}?w=162&auto=format`}
        srcSet={`${data.product.imgUrl}?w=162&auto=format&dpr=2 2x`}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
      <Label>{data.product.description}</Label>
    </Box>
  );
}
