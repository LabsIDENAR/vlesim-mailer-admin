import { Layout } from "../../layout";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import { EmailsData } from "./components/EmailsData";

export const TotalReports = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "1600px", margin: "0 auto" }}>
        <CssBaseline />
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h1">Total Report</Typography>
          </Stack>
          <Stack>
            <EmailsData />
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};
