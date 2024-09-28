import React from "react";
import { Stack, Box } from "@mui/material";
import { Bounce } from "../../../icons/Bounce";

export const EmailsData: React.FC = () => {
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
          sx={{ display: "flex", flexDirection: "row", gap: "5%" }}
        >
          <Stack sx={{ display: "flex", flexDirection: "column" }}>
            map de la info Icon texto
            <Bounce
              sx={{
                bgcolor: "",
                color: "black",
                width: "92px",
                height: "77px",
              }}
            />
          </Stack>
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
          {/* Your content goes here */}
          <div>Email Data Content</div>
        </Stack>
      </Box>
    </Stack>
  );
};
