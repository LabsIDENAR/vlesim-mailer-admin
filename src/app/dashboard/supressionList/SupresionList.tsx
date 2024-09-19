import React from "react";
import {
  Button,
  Box,
  CssBaseline,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Layout } from "../layout";
import SearchIcon from "@mui/icons-material/Search";
import { emailData } from "./data";

export const SupressionList: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "1600px", margin: "0 auto" }}>
        <CssBaseline />
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h1">Suppression List</Typography>
            <Typography variant="body1">
              Delivering email to invalid addresses or recipients that complain
              hurts your sender reputation, which reduces your ability to
              deliver email to the inbox. Our suppression list system
              automatically blocks email to any known invalid email address or
              any email address from which you have received a complaint.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: "300px" }}
            />
            <Button variant="contained" color="primary">
              + Add entry
            </Button>
          </Stack>

          {/* Table for Suppression List */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Last Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {emailData.map((email, index) => (
                  <TableRow key={index}>
                    <TableCell>{email.address}</TableCell>
                    <TableCell>{email.status}</TableCell>
                    <TableCell>{email.details}</TableCell>
                    <TableCell>{email.lastUpdate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Button sx={{ backgroundColor: "error.main", color: "white" }}>
              Delete Entries
            </Button>
            <Button variant="contained" color="primary">
              Download CSV
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};
