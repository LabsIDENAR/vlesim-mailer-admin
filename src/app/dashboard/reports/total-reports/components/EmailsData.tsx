import React, { useEffect, useState } from "react";
import { Stack, Box, Typography, CircularProgress } from "@mui/material";
import { Bounce } from "../../../icons/Bounce";
import { useApiGet } from "../../../../hooks/useGetApiCalls";
import { ApiResponse, CampaignStats } from "../interfaces";

export const EmailsData: React.FC = () => {
  const [campaignStats, setCampaignStats] = useState<CampaignStats | null>(
    null
  );
  const baseUrl = import.meta.env.VITE_APP_GET_STATISTIC;

  const {
    data: campaignsData,
    loading: campaignsLoading,
    error: campaignsError,
  } = useApiGet<ApiResponse<CampaignStats>>({ url: baseUrl });

  useEffect(() => {
    if (campaignsData && campaignsData.data) {
      setCampaignStats(campaignsData.data);
    }
  }, [campaignsData]);

  if (campaignsLoading) return <CircularProgress />;
  if (campaignsError)
    return (
      <Typography color="error">
        Error loading campaign data: {campaignsError}
      </Typography>
    );

  const statItems = [
    { icon: <Bounce />, label: "Bounces", value: campaignStats?.totalBounces },
    { icon: <Bounce />, label: "Clicks", value: campaignStats?.totalClicks },
    { icon: <Bounce />, label: "Opens", value: campaignStats?.totalOpens },
    {
      icon: <Bounce />,
      label: "Deliveries",
      value: campaignStats?.totalDeliveries,
    },
    { icon: <Bounce />, label: "Sends", value: campaignStats?.totalSends },
    {
      icon: <Bounce />,
      label: "Complaints",
      value: campaignStats?.totalComplaints,
    },
  ];

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          border: "5px dotted #24244A",
          borderRadius: "4px",
          padding: "16px",
          height: "233px",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5%",
            justifyContent: "space-around",
          }}
        >
          {campaignStats &&
            statItems.map((item, index) => (
              <Stack
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {React.cloneElement(item.icon, {
                  sx: {
                    bgcolor: "",
                    color: "black",
                    width: "92px",
                    height: "77px",
                  },
                })}
                <Typography variant="body1">{item.label}</Typography>
                <Typography variant="h6">{item.value}</Typography>
              </Stack>
            ))}
        </Stack>
      </Box>
      <Box
        sx={{
          border: "5px dotted #24244A",
          borderRadius: "4px",
          padding: "16px",
          height: "233px",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6">Email Data Content</Typography>
          {campaignStats && (
            <>
              <Typography>
                Total Email Processes: {campaignStats.totalEmailProcesses}
              </Typography>
              <Typography>
                Total Delivery Delays: {campaignStats.totalDeliveryDelays}
              </Typography>
              <Typography>
                Total Rejections: {campaignStats.totalRejections}
              </Typography>
              <Typography>
                Total Rendering Failures: {campaignStats.totalRenderingFailures}
              </Typography>
              <Typography>
                Total Subscriptions: {campaignStats.totalSubscriptions}
              </Typography>
              <Typography>
                Last Updated:{" "}
                {new Date(campaignStats.updatedAt).toLocaleString()}
              </Typography>
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
