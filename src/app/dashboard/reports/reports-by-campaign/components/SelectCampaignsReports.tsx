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
import { Campaign, GetById } from "../interfaces";

export const SelectCampaignsReports: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState("");
  const [additionalData, setAdditionalData] = useState<GetById | null>(null);

  const additionalDataUrl = import.meta.env.VITE_APP_GET_CAMPAIGNS_ID;
  const campaignsUrl = import.meta.env.VITE_APP_POST_AND_GET_CAMPAIGNS;

  const {
    data: campaignsData,
    loading: campaignsLoading,
    error: campaignsError,
    refetch: refetchCampaigns,
  } = useApiGet<Campaign[]>({ url: campaignsUrl });

  const {
    data: additionalApiData,
    loading: additionalDataLoading,
    error: additionalDataError,
    refetch: refetchAdditionalData,
  } = useApiGet<GetById>({ url: additionalDataUrl });

  useEffect(() => {
    if (campaignsData && campaignsData.data) {
      const campaignArray = Object.values(campaignsData.data);
      console.log("🚀 ~ useEffect ~ campaignArray:", campaignArray);
      setCampaigns(campaignArray);

      if (campaignArray.length > 0 && !selectedCampaignId) {
        setSelectedCampaignId(campaignArray[0].id);
      }
    }
  }, [campaignsData]);

  useEffect(() => {
    if (additionalApiData) {
      setAdditionalData(additionalApiData);
    }
  }, [additionalApiData]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCampaign(event.target.value as string);
  };

  if (campaignsLoading || additionalDataLoading) return <CircularProgress />;
  if (campaignsError)
    return <Typography>Error loading campaigns: {campaignsError}</Typography>;
  if (additionalDataError)
    return (
      <Typography>
        Error loading additional data: {additionalDataError}
      </Typography>
    );

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
      <Stack>
        <Typography>Select Campaign</Typography>
        <FormControl fullWidth>
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
                {campaign.campaignName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
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
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
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
      {additionalData && (
        <Typography>
          {/* Display additional data here */}
          Additional Data: {JSON.stringify(additionalData)}
        </Typography>
      )}
      <Stack direction="row" spacing={2}>
        <Button
          sx={{
            bgcolor: "#24244A",
            height: "32px",
            width: "62px",
            color: "white",
          }}
          onClick={() => {
            refetchCampaigns();
            refetchAdditionalData();
          }}
        >
          Refresh
        </Button>
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
