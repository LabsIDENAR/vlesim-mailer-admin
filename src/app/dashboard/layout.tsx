import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/SideBar";
import { Stack } from "@mui/material";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(children);

  const handleItemClick = (content: React.ReactNode) => {
    setActiveContent(content);
  };

  return (
    <Stack className="layout">
      <NavBar />
      <Stack className="main-content">
        <Sidebar onItemClick={handleItemClick} />
        <main>{activeContent}</main>
      </Stack>
    </Stack>
  );
};

export default Layout;
