import { useState, useEffect } from "react";
import { Layout } from "../../layout";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import { SelectCampaignsReports } from "./components/SelectCampaignsReports";
import { EmailsData } from "./components/EmailsData";
import { EmailsDataChart } from "./components/EmailsDataChart";
import { useApiGet } from "../../../hooks/useGetApiCalls";
import { ApiResponse, Campaign, CampaignStats } from "./interfaces";

export const ReportsByCampaign = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );
  const [campaignStats, setCampaignStats] = useState<CampaignStats | null>(
    null
  );

  const campaignsUrl = import.meta.env.VITE_APP_POST_AND_GET_CAMPAIGNS;
  const baseUrl = import.meta.env.VITE_APP_GET_CAMPAIGNS_ID;

  const { data: campaignsData } = useApiGet<ApiResponse<Campaign[]>>({
    url: campaignsUrl,
  });

  const { data: statsData } = useApiGet<ApiResponse<CampaignStats>>({
    url: selectedCampaign ? `${baseUrl}/${selectedCampaign.id}` : null,
    skip: !selectedCampaign,
  });

  useEffect(() => {
    if (statsData && statsData.data) {
      setCampaignStats(statsData.data);
    }
  }, [statsData]);

  const handleCampaignSelect = (campaign: Campaign | null) => {
    setSelectedCampaign(campaign);
    if (campaign === null) {
      setCampaignStats(null);
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: "1600px", margin: "0 auto" }}>
        <CssBaseline />
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h1">Reports by campaign</Typography>
          </Stack>
          <Stack>
            <SelectCampaignsReports
              campaigns={campaignsData?.data || []}
              onSelectCampaign={handleCampaignSelect}
              selectedCampaign={selectedCampaign}
            />
            <EmailsData
              campaignStats={campaignStats}
              selectedCampaign={selectedCampaign}
            />
            <EmailsDataChart
              selectedCampaign={selectedCampaign}
              campaignStats={campaignStats}
            />
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};
