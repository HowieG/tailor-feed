import type { TailorResult } from "~/types/TailorTypes";
import type { ReactNode } from "react";
import FeedComponent from "./FeedComponent";

interface MainContainerProps {
  children?: ReactNode;
}

const MainContainer: React.FC<
  MainContainerProps & { data: TailorResult[]; children?: React.ReactNode }
> = ({ children, data }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-r from-tailorTan-100 via-tailorTan-200 to-tailorTan-100 pt-4">
      {children}
      <FeedComponent data={data} />
    </div>
  );
};

export default MainContainer;
