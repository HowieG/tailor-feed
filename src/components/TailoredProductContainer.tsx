import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import type { TailoredProduct } from "~/types/TailorTypes";
import { stringToDescriptionTokenArray } from "~/utils";
import { testDescriptionTokens } from "~/data/test-data";
import DescriptionComponent from "./DescriptionComponent";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const imageStyles = {
  display: "flex",
  width: "100%",
  cursor: "click",
  borderRadius: "16px",
  objectFit: "cover" as const,
};

export default function TailoredProductContainer({
  data,
}: {
  data: TailoredProduct[];
}) {
  const [expanded, setExpanded] = React.useState<string | boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Masonry columns={4} spacing={2}>
        {data.map((item, index) => (
          <div key={index}>
            <Accordion
              defaultExpanded={true}
              expanded={expanded == true || expanded === `panel${index + 1}`}
              onMouseEnter={() => setExpanded(`panel${index + 1}`)}
              onMouseLeave={() => setExpanded(false)}
              square // No idea how this fixes things but it does
              sx={{ borderRadius: "16px", background: "transparent" }} // TODO: Find somewhere more appropriate to put this
            >
              <AccordionSummary
                aria-controls={`panel${index + 1}d-content`}
                id={`panel${index + 1}d-header`}
              >
                <Image
                  src={item.product.imgUrl}
                  alt="Alt Text"
                  loading="lazy"
                  style={imageStyles}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </AccordionSummary>
              <AccordionDetails>
                <DescriptionComponent
                  descriptionTokens={stringToDescriptionTokenArray(
                    testDescriptionTokens
                  )}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={16} {...props} />
))(({ theme }) => ({
  padding: 0,
  backgroundColor: "transparent",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: 0,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

// const Wrapper = () => {
// 	return (
// 	  <div style={{ display: "inline-flex", padding: "8px" }}>
// 		<Container></Container>
// 	  </div>
// 	);
//   };

// const Container = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "middle",
//         boxSizing: "border-box",
//         cursor: "pointer",
//         width: "236px",
//       }}
//     >
//       <Image
//         src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
//         alt="unsplash"
//         style={imageStyles}
//         width="0"
//         height="0"
//         sizes="100vw"
//         className="h-auto w-full"
//       />
//     </div>
//   );
// };
