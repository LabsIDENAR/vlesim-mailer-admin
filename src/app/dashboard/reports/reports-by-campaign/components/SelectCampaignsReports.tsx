import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { campaignsData } from "../../data";

export const SelectCampaignsReports = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        bgcolor: "#F9F9F9",
        flexDirection: "column",
        padding: "16px",
        gap: "15px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#F9F9F9", width: "1097px", height: "154px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#24244A", fontWeight: 600 }}>
                Campaign Name
              </TableCell>
              <TableCell sx={{ color: "#24244A", fontWeight: 600 }}>
                State
              </TableCell>
              <TableCell sx={{ color: "#24244A", fontWeight: 600 }}>
                Subject Email
              </TableCell>
              <TableCell sx={{ color: "#24244A", fontWeight: 600 }}>
                List
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaignsData.map((campaign, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#999797" }}>
                  {campaign.campaignName}
                </TableCell>
                <TableCell sx={{ color: "#999797" }}>
                  {campaign.state}
                </TableCell>
                <TableCell sx={{ color: "#999797" }}>
                  {campaign.subjectEmail}
                </TableCell>
                <TableCell sx={{ color: "#999797" }}>{campaign.list}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack>
        <Button sx={{ bgcolor: "#24244A", height: "32px", width: "62px" }}>
          Back
        </Button>
      </Stack>
    </Stack>
  );
};
