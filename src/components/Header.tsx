import React, { type ReactNode } from "react";
import Image from "next/image";
import { Input } from "~/components/ui/input";

const headerWrapperStyles = {
  display: "flex",
  alignItems: "center",
  height: "60px",
  padding: "12px 4px 4px 16px",
  backgroundColor: "#e8d8c3",
  color: "#fff",
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
        height: "48px",
        padding: "0 16px",
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
      <h1 style={{ color: "#fff", fontSize: "48px" }}>
        t<span style={{ color: "#bcd4bd" }}>ai</span>lor
      </h1>
      <ExploreButton />
      <Input placeholder="Search..."></Input>
    </HeaderWrapper>
  );
}

export default Header;
