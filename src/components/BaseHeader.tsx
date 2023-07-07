import React, { type ReactNode } from "react";
import Image from "next/image";

const headerWrapperStyles = {
  position: "sticky" as const,
  top: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  gap: "36px",
  alignItems: "center",
  padding: "0 32px",
  backgroundColor: "#e8d8c3",
  color: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const logoStyles = {
  color: "#D4BFA6", // TODO: use tailorTan-300
  fontSize: "64px",
  fontFamily: "Ysabeau SC, sans-serif",
  fontWeight: "700",
  margin: "-16px 0 0 0",
};

interface HeaderWrapperProps {
  children?: ReactNode;
}

//TODO: Convert to Tailwind
//TODO: Switch to grid

// TODO: Make this a clickable link to Home
const LogoWrapper = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image
          src="/img/tailor-logo.png"
          alt="Tailor Logo"
          width={48}
          height={48}
        />
      </div>
      <div style={logoStyles}>
        t<span style={{ color: "#bcd4bd" }}>ai</span>lor
      </div>
    </div>
  );
};

const BaseHeader: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <div style={headerWrapperStyles}>
      <LogoWrapper />
      {children}
    </div>
  );
};

export default BaseHeader;
