import ProductContainer from "./ProductContainer";

const MainContainer = () => {
  return (
    <div className="mt-4 flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-red-500">
      <TailoredResultContainer></TailoredResultContainer>
      <TailoredResultContainer></TailoredResultContainer>
    </div>
  );
};

const TailoredResultContainer = () => {
  return (
    <div className="flex h-96 w-full flex-row items-center justify-center bg-blue-500 p-2">
      <SourceProductContainer></SourceProductContainer>
      <TailoredResults></TailoredResults>
    </div>
  );
};

const SourceProductContainer = () => {
  return (
    <div className="flex h-full w-1/5 flex-col items-center justify-center bg-green-500"></div>
  );
};
const TailoredResults = () => {
  return (
    <div className="flex h-full w-4/5 flex-col items-center justify-center bg-yellow-500">
      <ProductContainer></ProductContainer>
    </div>
  );
};

export default MainContainer;
