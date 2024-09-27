import React from "react";
import { Stack, Box } from "@mui/material";

export const EmailsData: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          border: "5px dotted #24244A",
          borderRadius: "4px",
          padding: "16px",
        }}
      >
        <Stack spacing={2}>
          {/* Your content goes here */}
          <div>Email Data Content</div>
        </Stack>
      </Box>
    </Stack>
  );
};
