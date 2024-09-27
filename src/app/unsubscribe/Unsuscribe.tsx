import { useState } from "react";
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const Unsubscribe = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("authToken");

  const endpointPost = import.meta.env.VITE_APP_POST_UNSUSCRIBE_USERS;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnsubscribe = async () => {
    try {
      const response = await fetch(endpointPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the request.");
      }
      console.log("🚀 ~ handleUnsubscribe ~ response:", response);

      const data = await response.json();
      console.log("🚀 ~ handleUnsubscribe ~ data:", data);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
    console.log("User has unsubscribed");
    setOpen(false);
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Are you sure you want to unsubscribe?
      </Typography>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Unsubscribe
      </Button>

      {/* Dialogo de confirmación */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Unsubscribe Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to unsubscribe? You will no longer receive
            updates or notifications.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ bgcolor: "#1DD63A", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUnsubscribe}
            sx={{ bgcolor: "red", color: "white" }}
            autoFocus
          >
            Unsubscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
