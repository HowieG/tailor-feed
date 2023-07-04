type TailorResult = {
  referenceProduct: ReferenceProduct;
  tailoredProducts: TailoredProduct[];
};

type Product = {
  imgUrl: string;
  description?: DescriptionToken[]; // TODO: remove optional
  sourceUrl?: string;
};

type ReferenceProduct = {
  product: Product;
  feedback?: string;
};

type TailoredProduct = {
  product: Product;
};

type DescriptionToken = {
  token: string;
  sentiment?: boolean; // like = 1, dislike = 0, neutral = undefined
};

export type {
  TailorResult,
  Product,
  ReferenceProduct,
  TailoredProduct,
  DescriptionToken,
};
