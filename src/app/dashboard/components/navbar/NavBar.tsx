import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Popover,
  Stack,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface DecodedToken {
  username: string;
  exp: number;
}

const NavBar = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);

        setUserName(decoded.username);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleClickNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickUserName = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorEl(null);
  };

  const handleCloseUserName = () => {
    setUserAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    setUserName(null);
    handleCloseUserName();
  };

  const openNotifications = Boolean(anchorEl);
  const openUserPopover = Boolean(userAnchorEl);
  const notificationsId = openNotifications
    ? "notification-popover"
    : undefined;
  const userPopoverId = openUserPopover ? "user-popover" : undefined;

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
            sx={{ marginRight: "16px", color: "#929ECC", cursor: "pointer" }}
            onClick={handleClickUserName}
          >
            {userName ? userName : "No User Logged In"}
          </Typography>

          <IconButton edge="end" onClick={handleClickNotifications}>
            <Badge badgeContent={6} color="error">
              <NotificationsIcon sx={{ color: "#ffd733" }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      <Popover
        id={notificationsId}
        open={openNotifications}
        anchorEl={anchorEl}
        onClose={handleCloseNotifications}
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
            <Typography>Notification 1</Typography>
            <Typography>Notification 2</Typography>
            <Typography>Notification 3</Typography>
            <Typography>Notification 4</Typography>
          </Stack>
        </Box>
      </Popover>

      <Popover
        id={userPopoverId}
        open={openUserPopover}
        anchorEl={userAnchorEl}
        onClose={handleCloseUserName}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Box>
      </Popover>
    </AppBar>
  );
};

export default NavBar;
