import { Button, Select, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // or another adapter
import { useState } from "react";
import { Dayjs } from "dayjs"; // Import the type for Dayjs if you're using Dayjs

const FillCampaigns: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ width: "100%" }} spacing={3}>
        <Stack direction="row" spacing={2}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">E-mail Subject</Typography>
            <TextField label="Enter your E-mail Subject" variant="outlined" />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Campaign Name</Typography>
            <TextField label="Enter Campaign Name" variant="outlined" />
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">E-mail Body</Typography>
            <TextField label="Enter your E-mail Body" variant="outlined" />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Date</Typography>
            <DatePicker
              label="Select Start Date"
              value={selectedDate}
              onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
              slotProps={{ textField: { variant: "outlined" } }}
            />
          </Stack>
        </Stack>

        <Stack>
          <Button>Attach documents</Button>
          <Select></Select>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default FillCampaigns;
