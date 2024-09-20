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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";
import DocumentUploadModal from "./ModalFiles";

const FillCampaigns: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [age, setAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [emailTo, setEmailTo] = useState("example@gmail.com"); // Ajusta esto según tu lógica
  console.log("🚀 ~ setEmailTo:", setEmailTo);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleAddCampaign = async () => {
    if (!selectedDate || !subject || !campaignName || !body || !description) {
      alert("Please fill in all fields");
      return;
    }

    const requestBody = {
      name: campaignName,
      date: selectedDate.toISOString(),
      description: description,
      subject: subject,
      body: body,
      to: [emailTo],
      attachments: [],
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the request.");
      }

      const data = await response.json();
      console.log("Campaign created successfully:", data);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Campaign Name</Typography>
            <TextField
              label="Enter Campaign Name"
              variant="outlined"
              sx={{ width: "700px" }}
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </Stack>
        </Stack>

        <Stack
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
              minRows={10}
              sx={{ width: "350px" }}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              label="Enter your Description"
              variant="outlined"
              multiline
              minRows={10}
              sx={{ width: "350px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                label="Time"
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
          <Stack sx={{ display: "flex", flexDirection: "row", gap: "41px" }}>
            <Stack>
              <Button
                sx={{
                  width: "220px",
                  height: "36px",
                  borderRadius: "4px",
                  bgcolor: "#FFA048",
                }}
                onClick={handleOpenModal}
              >
                Create List
              </Button>
            </Stack>
            <DocumentUploadModal
              open={isModalOpen}
              onClose={handleCloseModal}
            />
            <Stack>
              <Button
                sx={{
                  width: "220px",
                  height: "36px",
                  borderRadius: "4px",
                  bgcolor: "#24244A",
                }}
                onClick={handleAddCampaign}
              >
                Add Campaign
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default FillCampaigns;
