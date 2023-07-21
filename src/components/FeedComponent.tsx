import TailoredProductContainer from "./TailoredProductContainer";
import type {
  TailorResult,
  ReferenceProduct,
  TailoredProduct,
} from "~/types/TailorTypes";
import SourceProductContainer from "./SourceProductContainer";

const FeedComponent = ({ data }: { data: TailorResult[] }) => {
  return (
    <div className="flex flex-col gap-12 pt-4">
      {data.map((product, index) => (
        <TailoredResultComponent
          data={product}
          key={index}
        ></TailoredResultComponent>
      ))}
    </div>
  );
};

const TailoredResultComponent = ({ data }: { data: TailorResult }) => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-12 rounded-lg bg-white bg-opacity-60 px-4 py-6 shadow-2xl md:w-[96%] md:flex-row">
      <ReferenceProductComponent
        data={data.referenceProduct}
      ></ReferenceProductComponent>
      <TailoredResults data={data.tailoredProducts}></TailoredResults>
    </div>
  );
};

const ReferenceProductComponent = ({ data }: { data: ReferenceProduct }) => {
  return (
    <div className="flex h-full w-full flex-col md:w-2/5 lg:w-1/5">
      <SourceProductContainer referenceProduct={data} />
    </div>
  );
};
const TailoredResults = ({ data }: { data: TailoredProduct[] }) => {
  return (
    <div className="flex h-full w-full flex-col justify-center md:w-4/5">
      <TailoredProductContainer
        tailoredProducts={data}
      ></TailoredProductContainer>
    </div>
  );
};

export default FeedComponent;
