import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import type { TailoredProduct } from "~/types/TailorTypes";
import { stringToDescriptionTokenArray } from "~/utils";
import { testDescriptionTokens } from "~/data/test-data";
import DescriptionComponent from "./DescriptionComponent";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

const imageStyles = {
  display: "flex",
  width: "100%",
  cursor: "click",
  borderRadius: "16px",
  objectFit: "cover" as const,
};

export default function TailoredProductContainer({
  tailoredProducts,
}: {
  tailoredProducts: TailoredProduct[];
}) {
  const [expanded, setExpanded] = React.useState<string | boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();

  const handleImageClick = (url: string) => {
    router.push(url).catch((error) => {
      // Handle error if any
      console.error("Error navigating to the URL:", error);
    });
  };

  return (
    <Box>
      <Masonry columns={4} spacing={2}>
        {tailoredProducts.map((tailoredProducts, index) => (
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
                  src={tailoredProducts.product.imgUrl}
                  alt="Alt Text"
                  loading="lazy"
                  style={imageStyles}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-auto w-full"
                  onClick={() =>
                    handleImageClick(
                      tailoredProducts.product.sourceUrl
                        ? tailoredProducts.product.sourceUrl
                        : "/"
                    )
                  }
                />
              </AccordionSummary>
              <AccordionDetails>
                <DescriptionComponent
                  descriptionTokens={
                    tailoredProducts.product.description
                      ? tailoredProducts.product.description
                      : stringToDescriptionTokenArray(testDescriptionTokens) // TODO: Remove once description non-optional
                  }
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
))(() => ({
  padding: 0,
  backgroundColor: "transparent",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  padding: 0,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 4,
}));
