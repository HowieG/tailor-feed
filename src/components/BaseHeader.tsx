import React, { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const headerWrapperStyles = {
  position: "sticky" as const,
  top: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  gap: "36px",
  alignItems: "center",
  padding: "0 2vw",
  backgroundColor: "#f5e3ce",
  color: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const logoStyles = {
  color: "#D4BFA6", // TODO: use tailorTan-300
  fontSize: "calc(2vw + 24px)",
  fontFamily: "Ysabeau SC, sans-serif",
  fontWeight: "700",
  margin: "-calc(10vw) 0 0 0",
};

interface HeaderWrapperProps {
  children?: ReactNode;
}

// TODO: Update from /signup to /. / is not routing to /signup on its own
const LogoWrapper = () => {
  return (
    <Link href="/signup">
      <div className="flex items-center">
        <div>
          <Image
            src="/img/tailor-logo.png"
            alt="Tailor Logo"
            width={36}
            height={36}
          />
        </div>
        <div style={logoStyles}>
          t<span style={{ color: "#bcd4bd" }}>ai</span>lor
        </div>
      </div>
    </Link>
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
