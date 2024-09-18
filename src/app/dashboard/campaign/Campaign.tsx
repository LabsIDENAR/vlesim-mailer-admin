import React from "react";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import { Layout } from "../layout";
import FillCampaigns from "./components/FillCampaings";

export const Campaign: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ minWidth: "1500px", margin: "0 auto" }}>
        <CssBaseline />
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h1">Campaigns</Typography>
          </Stack>
          <Stack>
            <FillCampaigns />
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};
