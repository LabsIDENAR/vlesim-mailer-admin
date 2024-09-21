import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  DialogActions,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

interface NavBarProps {
  openDialog: () => void;
  closeDialog: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ openDialog, closeDialog }) => {
  const userName = "User Name";
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => {
    setIsDialogOpen(true);
    openDialog();
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    closeDialog();
  };

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
          <IconButton edge="end" onClick={handleOpen}>
            <Badge badgeContent={6} color="error">
              <NotificationsIcon sx={{ color: "#ffd733" }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>Edit Campaign</DialogTitle>
        <DialogContent>
          <Stack>
            <Typography>Notificacion 1</Typography>
            <Typography>Notificacion 1</Typography>
            <Typography>Notificacion 1</Typography>
            <Typography>Notificacion 1</Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button sx={{ bgcolor: "red" }} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default NavBar;
