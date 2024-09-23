import { Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";
import DocumentUploadModal from "./ModalFiles";
import { Campaign } from "../interfaces";

interface FillCampaignsProps {
  addCampaign: (campaign: Campaign) => void;
}

const FillCampaigns: React.FC<FillCampaignsProps> = ({ addCampaign }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [attachDocuments, setAttachDocuments] = useState("");
  const [emailTo, setEmailTo] = useState("cardonaospinajuanesteban@gmail.com");
  console.log("🚀 ~ setEmailTo:", setEmailTo);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddCampaign = async () => {
    const endpointPost = import.meta.env.VITE_APP_POST_AND_GET_CAMPAIGNS;
    if (!selectedDate || !subject || !campaignName || !body || !description) {
      alert("Please fill in all fields");
      return;
    }

    const newCampaign = {
      name: campaignName,
      date: selectedDate.toISOString(),
      description: description,
      subject: subject,
      body: body,
      to: [emailTo],
      attachments: [],
    };

    try {
      const response = await fetch(endpointPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCampaign),
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the request.");
      }

      const data = await response.json();
      console.log("Campaign created successfully:", data);

      // Add the new campaign using the prop function
      addCampaign(data);

      // Clear the form fields
      setSelectedDate(null);
      setSubject("");
      setCampaignName("");
      setBody("");
      setDescription("");
      setAttachDocuments("");
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
              sx={{
                width: {
                  xs: "300px", // Para pantallas pequeñas
                  md: "700px", // Para pantallas medianas y mayores
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1DD63A", // Color del borde cuando está enfocado
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1DD63A", // Color de la etiqueta cuando está enfocada
                },
              }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Campaign Name</Typography>
            <TextField
              label="Enter Campaign Name"
              variant="outlined"
              sx={{
                width: {
                  xs: "300px", // Para pantallas pequeñas
                  md: "700px", // Para pantallas medianas y mayores
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1DD63A", // Color del borde cuando está enfocado
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1DD63A", // Color de la etiqueta cuando está enfocada
                },
              }}
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
              sx={{
                width: {
                  xs: "200px", // Para pantallas pequeñas
                  md: "350px", // Para pantallas medianas y mayores
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1DD63A", // Color del borde cuando está enfocado
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1DD63A", // Color de la etiqueta cuando está enfocada
                },
              }}
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
              sx={{
                width: {
                  xs: "200px", // Para pantallas pequeñas
                  md: "350px", // Para pantallas medianas y mayores
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1DD63A", // Color del borde cuando está enfocado
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1DD63A", // Color de la etiqueta cuando está enfocada
                },
              }}
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#1DD63A", // Color del borde cuando está enfocado
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#1DD63A", // Color de la etiqueta cuando está enfocada
                  },
                }}
              />
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
            <TextField
              label="Enter your Description"
              variant="outlined"
              multiline
              minRows={1}
              sx={{
                width: {
                  xs: "300px", // Para pantallas pequeñas
                  md: "700px", // Para pantallas medianas y mayores
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1DD63A", // Color del borde cuando está enfocado
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1DD63A", // Color de la etiqueta cuando está enfocada
                },
              }}
              value={attachDocuments}
              onChange={(e) => setAttachDocuments(e.target.value)}
            />
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
