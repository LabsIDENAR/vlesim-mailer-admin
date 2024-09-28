import React, { useState, useEffect } from "react";
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
  Select,
  Typography,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { useApiGet } from "../../../../hooks/useGetApiCalls";
import { ApiResponse, Campaign, CampaignStats } from "../interfaces";

export const SelectCampaignsReports: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string>("");
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null
  );
  const [additionalData, setAdditionalData] = useState<CampaignStats | null>(
    null
  );
  console.log("🚀 ~ additionalData:", additionalData);

  const campaignsUrl = import.meta.env.VITE_APP_POST_AND_GET_CAMPAIGNS;
  const baseUrl = import.meta.env.VITE_APP_GET_CAMPAIGNS_ID;

  const {
    data: campaignsData,
    loading: campaignsLoading,
    error: campaignsError,
  } = useApiGet<ApiResponse<Campaign[]>>({ url: campaignsUrl });

  const { data: additionalApiData } = useApiGet<ApiResponse<CampaignStats>>({
    url: selectedCampaignId ? `${baseUrl}/${selectedCampaignId}` : null,
    skip: !selectedCampaignId,
  });

  useEffect(() => {
    if (campaignsData && campaignsData.data) {
      setCampaigns(campaignsData.data);
    }
  }, [campaignsData]);

  useEffect(() => {
    if (additionalApiData) {
      setAdditionalData(additionalApiData.data);
    }
  }, [additionalApiData]);

  const handleChange = (event: SelectChangeEvent) => {
    const newSelectedCampaignId = event.target.value as string;
    setSelectedCampaign(newSelectedCampaignId);
    setSelectedCampaignId(newSelectedCampaignId);
  };

  if (campaignsLoading) return <CircularProgress />;
  if (campaignsError)
    return <Typography>Error loading campaigns: {campaignsError}</Typography>;

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
      <Stack sx={{ minWidth: "1100px" }}>
        <Typography sx={{ marginBottom: "2%" }}>Select Campaign</Typography>
        <FormControl
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#1DD63A",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1DD63A",
            },
          }}
        >
          <InputLabel id="campaign-select-label">Campaign Name</InputLabel>
          <Select
            labelId="campaign-select-label"
            id="campaign-select"
            value={selectedCampaign}
            label="Campaign Name"
            onChange={handleChange}
          >
            {campaigns.map((campaign) => (
              <MenuItem key={campaign.id} value={campaign.id}>
                {campaign.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {selectedCampaignId && (
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
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns
                .filter((campaign) => campaign.id === selectedCampaignId)
                .map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell sx={{ color: "#999797" }}>
                      {campaign.name}
                    </TableCell>
                    <TableCell sx={{ color: "#999797" }}>
                      {campaign.status}
                    </TableCell>
                    <TableCell sx={{ color: "#999797" }}>
                      {campaign.subject}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Stack direction="row" spacing={2}>
        <Button
          sx={{
            bgcolor: "#24244A",
            height: "32px",
            width: "62px",
            color: "white",
          }}
        >
          Back
        </Button>
      </Stack>
    </Stack>
  );
};
