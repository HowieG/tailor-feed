import TailoredProductContainer from "./TailoredProductContainer";
import type {
  TailorResult,
  ReferenceProduct,
  TailoredProduct,
} from "~/types/TailorTypes";
import { testProducts } from "~/data/test-data";
import SourceProductContainer from "./SourceProductContainer";

const MainContainer = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-12 bg-gradient-to-r from-tailorTan-100 via-tailorTan-200 to-tailorTan-100 pt-4">
      {testProducts.map((product, index) => (
        <TailoredResultContainer
          data={product}
          key={index}
        ></TailoredResultContainer>
      ))}
    </div>
  );
};

const TailoredResultContainer = ({ data }: { data: TailorResult }) => {
  return (
    <div className="mx-auto flex w-[96%] flex-row justify-center gap-12 rounded-2xl bg-white bg-opacity-60 px-4 py-6 shadow-2xl">
      <ReferenceProductContainer
        data={data.referenceProduct}
      ></ReferenceProductContainer>
      <TailoredResults data={data.tailoredProducts}></TailoredResults>
    </div>
  );
};

const ReferenceProductContainer = ({ data }: { data: ReferenceProduct }) => {
  return (
    <div className="ml-4 flex h-full w-1/5 flex-col">
      <SourceProductContainer data={data} />
    </div>
  );
};
const TailoredResults = ({ data }: { data: TailoredProduct[] }) => {
  return (
    <div className="flex h-full w-4/5 flex-col justify-center">
      <TailoredProductContainer data={data}></TailoredProductContainer>
    </div>
  );
};

export default MainContainer;
