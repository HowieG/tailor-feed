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
  sentiment?: SentimentRangeType; // like = 1, dislike = 0, neutral = undefined
};

type SentimentRangeType = -1 | -0.75 | -0.5 | -0.25 | 0 | 0.25 | 0.5 | 0.75 | 1;

export type {
  TailorResult,
  Product,
  ReferenceProduct,
  TailoredProduct,
  DescriptionToken,
  SentimentRangeType,
};
