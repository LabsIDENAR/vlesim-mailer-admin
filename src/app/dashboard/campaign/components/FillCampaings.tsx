import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // or another adapter
import { useState } from "react";
import { Dayjs } from "dayjs"; // Import the type for Dayjs if you're using Dayjs

const FillCampaigns: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ width: "100%" }} spacing={3}>
        <Stack direction="row" spacing={2}>
          <Stack spacing={1}>
            <Typography variant="subtitle1">E-mail Subject</Typography>
            <TextField
              label="Enter your E-mail Subject"
              variant="outlined"
              sx={{ width: "700px" }}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Campaign Name</Typography>
            <TextField
              label="Enter Campaign Name"
              variant="outlined"
              sx={{ width: "700px" }}
            />
          </Stack>
        </Stack>

        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle1">E-mail Body</Typography>
            <TextField
              label="Enter your E-mail Body"
              variant="outlined"
              multiline
              minRows={10} // Adjust the number of rows to control the height
              sx={{ width: "500px" }}
            />
          </Stack>

          <Stack sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1">Date</Typography>
              <DatePicker
                label="Select Start Date"
                value={selectedDate}
                onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
                slotProps={{ textField: { variant: "outlined" } }}
              />
            </Stack>

            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1">Time</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                placeholder="Select"
                onChange={handleChange}
                sx={{ width: 200 }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Stack sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Button variant="contained" color="primary">
              Attach documents
            </Button>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              placeholder="Select"
              onChange={handleChange}
              sx={{ width: 200 }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Stack>
          <Stack>
            <Button
              sx={{
                width: "220px",
                height: "36px",
                borderRadius: "4px",
                bgcolor: "#24244A",
              }}
            >
              Add Campaign
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default FillCampaigns;
