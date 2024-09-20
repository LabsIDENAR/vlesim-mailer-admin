import React, { useState, useEffect } from "react";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CircularProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Edit, Delete } from "lucide-react";
import { Campaign } from "../interfaces";

const CampaignHistory: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );
  const [editedCampaign, setEditedCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://vlesim-mailer-268611735.us-east-2.elb.amazonaws.com/campaign",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch campaigns");
      }

      const data = await response.json();
      console.log("API response:", data.data);
      setCampaigns(data.data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      setError("Failed to load campaigns. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setEditedCampaign({ ...campaign });
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setDeleteDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedCampaign(null);
    setEditedCampaign(null);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setSelectedCampaign(null);
  };

  const handleEditSubmit = async () => {
    if (editedCampaign && selectedCampaign) {
      try {
        const response = await fetch(
          `http://vlesim-mailer-268611735.us-east-2.elb.amazonaws.com/campaign/${selectedCampaign.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedCampaign),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update campaign");
        }

        // Update the local state
        setCampaigns(
          campaigns.map((c) =>
            c.id === selectedCampaign.id ? editedCampaign : c
          )
        );
        handleEditDialogClose();
      } catch (error) {
        console.error("Error updating campaign:", error);
        setError("Failed to update campaign. Please try again later.");
      }
    }
  };

  const handleDeleteConfirm = async () => {
    if (selectedCampaign) {
      try {
        const response = await fetch(
          `http://vlesim-mailer-268611735.us-east-2.elb.amazonaws.com/campaign/${selectedCampaign.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete campaign");
        }

        // Update the local state
        setCampaigns(campaigns.filter((c) => c.id !== selectedCampaign.id));
        handleDeleteDialogClose();
      } catch (error) {
        console.error("Error deleting campaign:", error);
        setError("Failed to delete campaign. Please try again later.");
      }
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (campaigns.length === 0) {
    return <Typography>No campaigns found.</Typography>;
  }

  return (
    <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={3}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography variant="h2" sx={{ p: "25px" }}>
          Campaign History
        </Typography>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {Object.keys(campaigns[0]).map((key) => (
                  <TableCell
                    key={key}
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "primary.main",
                      color: "#000000",
                      bgcolor: "#F6F6F6",
                    }}
                  >
                    {key}
                  </TableCell>
                ))}
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "primary.main",
                    color: "#000000",
                    bgcolor: "#F6F6F6",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((campaign, index) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={campaign.id || index}
                  >
                    {Object.values(campaign).map((value, cellIndex) => (
                      <TableCell key={cellIndex}>
                        {Array.isArray(value)
                          ? value.join(", ")
                          : String(value)}
                      </TableCell>
                    ))}
                    <TableCell>
                      <IconButton onClick={() => handleEditClick(campaign)}>
                        <Edit size={16} />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteClick(campaign)}>
                        <Delete size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={campaigns.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Campaign</DialogTitle>
        <DialogContent>
          {editedCampaign &&
            Object.keys(editedCampaign).map((key) => (
              <TextField
                key={key}
                fullWidth
                margin="normal"
                label={key}
                value={editedCampaign[key]}
                onChange={(e) =>
                  setEditedCampaign({
                    ...editedCampaign,
                    [key]: e.target.value,
                  })
                }
              />
            ))}
        </DialogContent>
        <DialogActions>
          <Button sx={{ bgcolor: "red" }} onClick={handleEditDialogClose}>
            Cancel
          </Button>
          <Button
            sx={{ bgcolor: "#1DD63A" }}
            onClick={handleEditSubmit}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this campaign?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default CampaignHistory;
