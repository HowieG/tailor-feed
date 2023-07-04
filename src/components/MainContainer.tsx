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
    <div className="mt-4 flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-red-500">
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
    <div className="flex h-full w-full flex-row items-center justify-center bg-blue-500 p-2">
      <ReferenceProductContainer
        data={data.referenceProduct}
      ></ReferenceProductContainer>
      <TailoredResults data={data.tailoredProducts}></TailoredResults>
    </div>
  );
};

const ReferenceProductContainer = ({ data }: { data: ReferenceProduct }) => {
  return (
    <div className="flex h-full w-1/5 flex-col items-center justify-center bg-green-500">
      <SourceProductContainer data={data} />
    </div>
  );
};
const TailoredResults = ({ data }: { data: TailoredProduct[] }) => {
  return (
    <div className="flex h-full w-4/5 flex-col justify-center bg-yellow-500">
      <TailoredProductContainer data={data}></TailoredProductContainer>
    </div>
  );
};

export default MainContainer;
