import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Popover,
  Stack,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const NavBar = () => {
  const userName = "juan@mail.com";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Guarda el elemento donde se hizo clic
  };

  const handleClose = () => {
    setAnchorEl(null); // Cierra el popover
  };

  const open = Boolean(anchorEl); // Abre el popover si hay un elemento anclado
  const id = open ? "notification-popover" : undefined;

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#24244A", color: "#000" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: "26px", color: "#fff" }}
          >
            <span style={{ color: "#1DD63A" }}>VLESIM</span> MAILER
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ marginRight: "16px", color: "#929ECC" }}
          >
            {userName}
          </Typography>
          <IconButton edge="end" onClick={handleClick}>
            <Badge badgeContent={6} color="error">
              <NotificationsIcon sx={{ color: "#ffd733" }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ padding: 2, minWidth: 200 }}>
          <Typography variant="h6">Notifications</Typography>
          <Stack spacing={1}>
            <Typography>Notifications 1</Typography>
            <Typography>Notifications 2</Typography>
            <Typography>Notifications 3</Typography>
            <Typography>Notifications 4</Typography>
          </Stack>
        </Box>
      </Popover>
    </AppBar>
  );
};

export default NavBar;
