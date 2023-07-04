import React from "react";
import Image from "next/image";

const Wrapper = () => {
  return (
    <div style={{ display: "inline-flex", padding: "8px" }}>
      <Container></Container>
    </div>
  );
};

// TODO: switch to styled-components which lets you do nested selectors like so:
// const containerStyles = {
// 	display: "flex",
// 	alignItems: "middle",
// 	boxSizing: "border-box",
// 	cursor: "pointer",
// 	width: "236px",

// 	img {
// 		display: "flex",
// 		width:"100%",
// 		cursor: "click",
// 		borderRadius: "16px",
// 		objectFit: "cover",
// 	}
// };

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

export default function ProductContainer() {
  return <Wrapper></Wrapper>;
}
