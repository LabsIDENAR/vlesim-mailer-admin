import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/SideBar";
import { Stack, SxProps } from "@mui/material";

type Props = {
  children: JSX.Element | JSX.Element[] | null;
  sx?: SxProps;
  fullHeight?: boolean;
};

export const Layout: React.FC<Props> = ({ children, fullHeight, sx }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: fullHeight ? "100%" : "auto",
        px: 2,
        py: 7,
        gap: 2,
        borderRadius: "6px",
        overflowY: "auto",
        display: "flex",  // Set the layout to flex
        ...sx,
      }}
      className={"pageLayout"}
    >
      <NavBar />
      <Sidebar />
      <Stack
        sx={{
          marginLeft: "276px", // Shifts content to the right, respecting sidebar width
          width: "calc(100% - 276px)", // Uses the remaining space
          alignItems: "center",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
