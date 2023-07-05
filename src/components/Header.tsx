import React, { type ReactNode } from "react";
import Image from "next/image";
import { Input } from "~/components/ui/input";

const headerWrapperStyles = {
  display: "flex",
  gap: "6px",
  alignItems: "center",
  padding: "0 32px",
  backgroundColor: "#e8d8c3",
  color: "#fff",
};

const logoStyles = {
  color: "#fff",
  fontSize: "64px",
  fontFamily: "Ysabeau SC, sans-serif",
  fontWeight: "700",
  margin: "-16px 0 0 0",
};

interface HeaderWrapperProps {
  children: ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return <div style={headerWrapperStyles}>{children}</div>;
};

//TODO: Convert to Tailwind
//TODO: Switch to grid

const LogoWrapper = () => {
  return (
    <div style={{ display: "flex" }}>
      <Image
        src="/img/tailor-logo.png"
        alt="Tailor Logo"
        width={48}
        height={48}
      />
    </div>
  );
};

const ExploreButton = () => {
  return (
    <button
      style={{
        display: "flex",
        height: "40px",
        padding: "0 12px",
        margin: "0 12px",
        border: "none",
        borderRadius: "24px",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      Explore
    </button>
  );
};

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper />
      <div style={logoStyles}>
        t<span style={{ color: "#bcd4bd" }}>ai</span>lor
      </div>
      <ExploreButton />
      <Input className="w-1/2 rounded-full" placeholder="Search..."></Input>
      <div className="ml-auto mr-4 font-bold">Sign Out</div>
    </HeaderWrapper>
  );
}

export default Header;
