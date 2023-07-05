import type {
  TailoredProduct,
  ReferenceProduct,
  TailorResult,
  Product,
  DescriptionToken,
} from "~/types/TailorTypes";

const stripedCouches: TailoredProduct[] = [
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-sofa-mademoiselle-home-decor-and-furniture-store-3_800x.jpg?v=1687837945",
    },
  },
  {
    product: {
      imgUrl:
        "https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600,format=webp/mall/file/2022/10/27/8b96f67285eda64942f611f1bdbe216f.jpg",
    },
  },
  {
    product: {
      imgUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvF932PWEdFFrCxzYlBROczBZ5ee0j3uIkCiZKi5zM6AvW43FshzCkd5Rlz-Hd0_KcWtX0Whp9llmvVxDnqU_64ekJGW7wMA&usqp=CAY",
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-chair-mademoiselle-home-decor-and-furniture-store-3_800x.jpg?v=1687823657",
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-sofa-mademoiselle-home-decor-and-furniture-store-1_800x.jpg?v=1687837940",
    },
  },
  {
    product: {
      imgUrl:
        "https://www.interiortonic.com/cdn/shop/products/IMG_1778_5000x.jpg?v=1671611711",
    },
  },
  {
    product: {
      imgUrl:
        "https://a.1stdibscdn.com/studio-sofa-by-norr11-modular-sofa-setup-1-grey-for-sale-picture-3/f_31233/f_268961321642093010550/210907_norr11_Morten_Bentzon_22792_master.jpg?disable=upscale&auto=webp&quality=60&width=1400",
    },
  },
  {
    product: {
      imgUrl:
        "https://www.futureclassicsfurniture.com.au/cdn/shop/products/marshmellow_chair_1080x.png?v=1619059382",
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0722/1048/1438/products/S4489_WHITE_FURRY-1_960x_crop_center.jpg?v=1676385660",
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0106/7008/0063/products/NORR11Studio_Sofa_Set_up_4Barnum_Boucle_Col_24_2048x2048.jpg?v=1632750193",
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0632/7903/8679/products/CurvedWabi-SabiUpholsteredCloudSofa_4_2_960x_crop_center.jpg?v=1675093069",
    },
  },
  {
    product: {
      imgUrl:
        "https://i.pinimg.com/originals/d6/6c/97/d66c9796d2fa17b8cc53e8fa28daacff.jpg",
    },
  },
  {
    product: {
      imgUrl:
        "https://a.1stdibscdn.com/customizable-norr11-studio-sofa-setup1-by-kristian-sofus-hansen-tommy-hyldahl-for-sale-picture-8/f_44652/f_298347921659461435258/220709_NORR11_CONTENT47461_master.jpg?disable=upscale&auto=webp&quality=60&width=1400",
    },
  },
  {
    product: {
      imgUrl:
        "https://a.1stdibscdn.com/customizable-norr11-studio-sofa-setup1-by-kristian-sofus-hansen-tommy-hyldahl-for-sale/f_44652/f_298347921659463422318/f_29834792_1659463422694_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=1400",
    },
  },
];

const bubbleCouches: TailoredProduct[] = [
  {
    product: {
      imgUrl:
        "https://img.edilportale.com/product-thumbs/2b_prodotti-74998-rel380b5c3cbdf044c49911bd9b9d3b9571.jpg",
    },
  },
  {
    product: {
      imgUrl:
        "https://i.pinimg.com/564x/1f/a7/7f/1fa77f560d8873b5d5fc18904800bfb6.jpg",
    },
  },
  {
    product: {
      imgUrl:
        "https://secure.img1-cg.wfcdn.com/im/50187437/resize-h445%5Ecompr-r85/2286/228668566/Daniel-Junior+4+-+Piece+Upholstered+Sectional.jpg",
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/1010/2666/products/marsilyakoltuk1139ckopya_2048x.jpg?v=1669123111",
    },
  },
  {
    product: {
      imgUrl:
        "https://merior.co/cdn/shop/products/1_4bec87f8-1de7-4dae-98fe-e9429f462951.jpg?v=1671480469&width=1200",
    },
  },
  {
    product: {
      imgUrl:
        "https://i.pinimg.com/originals/13/ff/2d/13ff2d81947ecd2a15ae8d164760c2ee.jpg",
    },
  },
];

const referenceProduct1: ReferenceProduct = {
  product: {
    imgUrl:
      "https://i.pinimg.com/originals/ca/fd/3c/cafd3c29f246f07f5985217636a8f8a0.png",
  },
};

const referenceProduct2: ReferenceProduct = {
  product: {
    imgUrl:
      "https://i.pinimg.com/originals/e0/5e/a7/e05ea72296215a1e91a753b5bd271262.jpg",
  },
};

export const testProducts: TailorResult[] = [
  {
    referenceProduct: referenceProduct1,
    tailoredProducts: stripedCouches,
  },
  {
    referenceProduct: referenceProduct2,
    tailoredProducts: bubbleCouches,
  },
];

export const testDescriptionTokens =
  "elongated couch sinuous lines ivory extruded design striped soft rounded forms modest simple design plush";
