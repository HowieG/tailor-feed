import React, { type ReactNode } from "react";
import Image from "next/image";
import { Input } from "~/components/ui/input";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BaseHeader from "./BaseHeader";

const headerWrapperStyles = {
  position: "sticky" as const,
  top: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  gap: "32px",
  alignItems: "center",
  padding: "0 12px",
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
  children: ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return <div style={headerWrapperStyles}>{children}</div>;
};

//TODO: Convert to Tailwind
//TODO: Switch to grid

const LogoWrapper = () => {
  return (
    <div className="mx-6 flex items-center">
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

const ExploreButton = () => {
  return (
    <button
      style={{
        display: "flex",
        padding: "12px",
        border: "none",
        borderRadius: "24px",
        backgroundColor: "#fff",
        color: "#888",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Explore
    </button>
  );
};

function Header() {
  return (
    <BaseHeader>
      <ExploreButton />
      <div className="flex-grow">
        <Input className="w-3/4 rounded-full" placeholder="Search..."></Input>
      </div>
      <div className="flex h-full items-center">
        <CircleNotificationsIcon style={{ fontSize: "48px" }} />
        <AccountCircleIcon style={{ fontSize: "48px" }} />
      </div>
    </BaseHeader>
  );
}

export default Header;
