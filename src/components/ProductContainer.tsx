import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const stripedCouches = [
  {
    img: "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-sofa-mademoiselle-home-decor-and-furniture-store-3_800x.jpg?v=1687837945",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-sofa-mademoiselle-home-decor-and-furniture-store-1_800x.jpg?v=1687837940",
  },
  {
    img: "https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600,format=webp/mall/file/2022/10/27/8b96f67285eda64942f611f1bdbe216f.jpg",
  },
  {
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvF932PWEdFFrCxzYlBROczBZ5ee0j3uIkCiZKi5zM6AvW43FshzCkd5Rlz-Hd0_KcWtX0Whp9llmvVxDnqU_64ekJGW7wMA&usqp=CAY",
  },
  {
    img: "https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600,format=webp/mall/file/2022/10/27/8b96f67285eda64942f611f1bdbe216f.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/1f/a7/7f/1fa77f560d8873b5d5fc18904800bfb6.jpg",
  },
  {
    img: "https://secure.img1-cg.wfcdn.com/im/50187437/resize-h445%5Ecompr-r85/2286/228668566/Daniel-Junior+4+-+Piece+Upholstered+Sectional.jpg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-chair-mademoiselle-home-decor-and-furniture-store-3_800x.jpg?v=1687823657",
  },
  {
    img: "https://www.interiortonic.com/cdn/shop/products/IMG_1778_5000x.jpg?v=1671611711",
  },
  {
    img: "https://a.1stdibscdn.com/studio-sofa-by-norr11-modular-sofa-setup-1-grey-for-sale-picture-3/f_31233/f_268961321642093010550/210907_norr11_Morten_Bentzon_22792_master.jpg?disable=upscale&auto=webp&quality=60&width=1400",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1010/2666/products/marsilyakoltuk1139ckopya_2048x.jpg?v=1669123111",
  },
  {
    img: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202324/0143/img90xl.jpg",
  },
  {
    img: "https://merior.co/cdn/shop/products/1_4bec87f8-1de7-4dae-98fe-e9429f462951.jpg?v=1671480469&width=1200",
  },
  {
    img: "https://www.futureclassicsfurniture.com.au/cdn/shop/products/marshmellow_chair_1080x.png?v=1619059382",
  },
  {
    img: "https://homiodecor.com/cdn/shop/files/living-room-velvet-chair-customised-chair-pumpkin-lazy-sofa-40414460969211_1800x1800.png?v=1687685405",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0722/1048/1438/products/S4489_WHITE_FURRY-1_960x_crop_center.jpg?v=1676385660",
  },
  {
    img: "https://i.pinimg.com/originals/e0/5e/a7/e05ea72296215a1e91a753b5bd271262.jpg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0106/7008/0063/products/NORR11Studio_Sofa_Set_up_4Barnum_Boucle_Col_24_2048x2048.jpg?v=1632750193",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0632/7903/8679/products/CurvedWabi-SabiUpholsteredCloudSofa_4_2_960x_crop_center.jpg?v=1675093069",
  },
  {
    img: "https://i.pinimg.com/originals/ca/fd/3c/cafd3c29f246f07f5985217636a8f8a0.png",
  },
  {
    img: "https://i.pinimg.com/originals/d6/6c/97/d66c9796d2fa17b8cc53e8fa28daacff.jpg",
  },
  {
    img: "https://i.pinimg.com/originals/13/ff/2d/13ff2d81947ecd2a15ae8d164760c2ee.jpg",
  },
  {
    img: "https://a.1stdibscdn.com/customizable-norr11-studio-sofa-setup1-by-kristian-sofus-hansen-tommy-hyldahl-for-sale-picture-8/f_44652/f_298347921659461435258/220709_NORR11_CONTENT47461_master.jpg?disable=upscale&auto=webp&quality=60&width=1400",
  },
  {
    img: "https://a.1stdibscdn.com/customizable-norr11-studio-sofa-setup1-by-kristian-sofus-hansen-tommy-hyldahl-for-sale/f_44652/f_298347921659463422318/f_29834792_1659463422694_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=1400",
  },
  {
    img: "https://franceandson.com/cdn/shop/products/FYS0761RBGE_5a335746-fb64-4d96-a517-da06a19f22b7_1800x1800.jpg?v=1672486567",
  },
];

const bubbleCouches = [
  {
    img: "https://img.edilportale.com/product-thumbs/2b_prodotti-74998-rel380b5c3cbdf044c49911bd9b9d3b9571.jpg",
  },
];

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
  return (
    <Box>
      <Masonry columns={5} spacing={2}>
        {stripedCouches.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
            <Label>{index + 1}</Label>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
