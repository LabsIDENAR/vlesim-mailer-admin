import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NavBar = () => {
  const userName = "User Name";

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
          <IconButton edge="end">
            <Badge badgeContent={6} color="error">
              <NotificationsIcon sx={{ color: "#ffd733" }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
