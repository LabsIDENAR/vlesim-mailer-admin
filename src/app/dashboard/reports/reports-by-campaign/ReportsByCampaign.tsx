import { Layout } from "../../layout";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import { SelectCampaignsReports } from "./components/SelectCampaignsReports";

export const ReportsByCampaign = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "1600px", margin: "0 auto" }}>
        <CssBaseline />
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h1">Reports by campaign</Typography>
          </Stack>
          <Stack>
            <SelectCampaignsReports />
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};
