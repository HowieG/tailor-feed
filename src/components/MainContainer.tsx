import type { TailorResult } from "~/types/TailorTypes";
import type { ReactNode } from "react";
import FeedComponent from "./FeedComponent";

interface MainContainerProps {
  children?: ReactNode;
}

const MainContainer: React.FC<
  MainContainerProps & { children?: React.ReactNode }
> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-tailorTan-100 bg-gradient-to-r md:pt-4">
      {children}
    </div>
  );
};

export default MainContainer;
