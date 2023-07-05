import type {
  TailoredProduct,
  ReferenceProduct,
  TailorResult,
} from "~/types/TailorTypes";

const chairsWithNoArmrest: TailoredProduct[] = [
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-chair-mademoiselle-home-decor-and-furniture-store-3_800x.jpg?v=1687823657",
      sourceUrl:
        "https://www.amazon.com/YQSYWYN-Pumpkin-Bedroom-Balcony-Leisure/dp/B09W9HGCQZ?th=1",
      description: [
        { token: "small", sentiment: 0 },
        { token: "fur", sentiment: 0 },
        { token: "upholstered", sentiment: 0 },
        { token: "swivel", sentiment: 0 },
        { token: "soft", sentiment: 0.75 },
        { token: "cute", sentiment: 0.25 },
        { token: "dreamy", sentiment: 0.25 },
        { token: "sfumato", sentiment: 0 },
        { token: "ivory", sentiment: 0.75 },
        { token: "creased", sentiment: 0.75 },
        { token: "deco", sentiment: 0 },
        { token: "pop", sentiment: 0 },
        { token: "tondo", sentiment: 0 },
        { token: "bulbous", sentiment: 1 },
      ],
    },
  },
  {
    product: {
      imgUrl: "https://media.cymaxstores.com/Images/5102/2628551-L.jpg",
      sourceUrl:
        "https://www.homesquare.com/Meridian-Furniture-Swoon-Cream-Faux-Sheepskin-Accent-Chair-572Cream.htm?src=cpc&srcid=32187104",
      description: [
        { token: "chair", sentiment: 1 },
        { token: "ivory", sentiment: 0.75 },
        { token: "1970s", sentiment: 0 },
        { token: "foampunk", sentiment: 0.25 },
        { token: "textured", sentiment: 0 },
        { token: "fabrics", sentiment: 0 },
        { token: "modular", sentiment: 0 },
        { token: "stipple", sentiment: 0 },
      ],
    },
  },
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0220/3498/products/TOV-S68128-1_5000x.jpg?v=1639904262",
      sourceUrl: "https://thelifestyledco.com/products/peche-lounge-chair",
      description: [
        { token: "curved", sentiment: 0.75 },
        { token: "leather", sentiment: 0 },
        { token: "rounded", sentiment: 0.75 },
        { token: "chair", sentiment: 1 },
        { token: "white", sentiment: 0.75 },
        { token: "cushioning", sentiment: 0.75 },
        { token: "whimsical", sentiment: 0.5 },
        { token: "mushroom", sentiment: 0 },
        { token: "pop", sentiment: 0 },
        { token: "art deco", sentiment: 0 },
        { token: "soft edged", sentiment: 0.5 },
      ],
    },
  },
  {
    product: {
      imgUrl:
        "https://mobileimages.lowes.com/productimages/bca1135d-f168-4aa2-a41c-63b8d5c1124f/42407876.jpg?size=pdhism",
      sourceUrl:
        "https://www.lowes.com/pd/TOV-Furniture-Curves-Cream-Velvet-Lounge-Chair/5001700839",
      description: [
        { token: "cream", sentiment: 0.5 },
        { token: "arc", sentiment: 0.5 },
        { token: "lounge", sentiment: 0.25 },
        { token: "chair", sentiment: 1 },
        { token: "upholstered", sentiment: 0 },
        { token: "bold", sentiment: 0 },
        { token: "cartoonish", sentiment: 0 },
        { token: "lines", sentiment: 1 },
        { token: "velvety", sentiment: 0 },
        { token: "spiral", sentiment: 0.5 },
        { token: "extruded", sentiment: 1 },
        { token: "soft", sentiment: 0.75 },
        { token: "dreamy", sentiment: 0.25 },
      ],
    },
  },
];

const stripedCouches: TailoredProduct[] = [
  {
    product: {
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0520/4384/1704/files/operose-sofa-mademoiselle-home-decor-and-furniture-store-3_800x.jpg?v=1687837945",
      sourceUrl:
        "https://www.aliexpress.com/i/3256803227620457.html?gatewayAdapt=4itemAdapt",
    },
  },
  {
    product: {
      imgUrl:
        "https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600,format=webp/mall/file/2022/10/27/8b96f67285eda64942f611f1bdbe216f.jpg",
      sourceUrl:
        "https://www.homary.com/item/866-modern-white-velvet-3seater-sofa-channel-tufted-upholstered-luxury-solid-wood-44176.html",
    },
  },
  {
    product: {
      imgUrl:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvF932PWEdFFrCxzYlBROczBZ5ee0j3uIkCiZKi5zM6AvW43FshzCkd5Rlz-Hd0_KcWtX0Whp9llmvVxDnqU_64ekJGW7wMA&usqp=CAY",
      sourceUrl:
        "https://www.westelm.com/shop/furniture/canvas+sofas/material-m-material-ff0011-1/",
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
        "https://a.1stdibscdn.com/customizable-norr11-studio-sofa-setup1-by-kristian-sofus-hansen-tommy-hyldahl-for-sale-picture-8/f_44652/f_298347921659461435258/220709_NORR11_CONTENT47461_master.jpg?disable=upscale&auto=webp&quality=60&width=1400",
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
      "https://cdn.shopify.com/s/files/1/0557/7873/8326/products/H8f8e9daa1aac448eb201d94fb60c4487L_1080x.jpg?v=1687270815",
    sourceUrl:
      "https://thetrendwillout.com/en-us/products/sofa-velvet-nordic-italian-designer-luxury-cashmere-leisure-3-sitzer-sofa-home-office-furniture",
    description: [
      { token: "elongated", sentiment: -1 },
      { token: "couch", sentiment: -1 },
      { token: "sinuous", sentiment: 1 },
      { token: "lines", sentiment: 1 },
      { token: "ivory", sentiment: 1 },
      { token: "extruded", sentiment: 1 },
      { token: "design", sentiment: 0 },
      { token: "striped", sentiment: 1 },
      { token: "soft", sentiment: 0 },
      { token: "rounded", sentiment: 0 },
      { token: "forms", sentiment: 0 },
      { token: "modest", sentiment: 0 },
      { token: "simple", sentiment: 0 },
      { token: "design", sentiment: 0 },
      { token: "plush", sentiment: 1 },
      { token: "fuzzy", sentiment: 0 },
    ],
  },
  feedback: "I'd love this as a chair with no armrests",
};

const referenceProduct2: ReferenceProduct = {
  product: {
    imgUrl:
      "https://i.pinimg.com/originals/ca/fd/3c/cafd3c29f246f07f5985217636a8f8a0.png",
  },
};

const referenceProduct3: ReferenceProduct = {
  product: {
    imgUrl:
      "https://i.pinimg.com/originals/e0/5e/a7/e05ea72296215a1e91a753b5bd271262.jpg",
  },
};

export const testProducts: TailorResult[] = [
  {
    referenceProduct: referenceProduct1,
    tailoredProducts: chairsWithNoArmrest,
  },
  {
    referenceProduct: referenceProduct2,
    tailoredProducts: stripedCouches,
  },
  {
    referenceProduct: referenceProduct3,
    tailoredProducts: bubbleCouches,
  },
];

export const demo: TailorResult[] = [
  {
    referenceProduct: referenceProduct1,
    tailoredProducts: chairsWithNoArmrest,
  },
];

export const testDescriptionTokens =
  "elongated couch sinuous lines ivory extruded design striped soft rounded forms modest simple design plush";
