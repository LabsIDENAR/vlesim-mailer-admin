import React from "react";
import {
  Box,
  CssBaseline,
  Stack,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Layout } from "../layout";
import FillCampaigns from "./components/FillCampaings";
import CampaignHistory from "./components/CampaignHistory";

const Campaign: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters={isSmallScreen}>
        <Box
          sx={{
            width: "100%",
            padding: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography
                variant={isSmallScreen ? "h3" : "h1"}
                align={isSmallScreen ? "center" : "left"}
              >
                Campaigns
              </Typography>
            </Stack>
            <Stack>
              <FillCampaigns />
              <CampaignHistory />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
};

export default Campaign;
