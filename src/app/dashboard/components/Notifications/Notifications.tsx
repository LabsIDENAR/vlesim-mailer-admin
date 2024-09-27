import {MouseEvent} from "react";
import {Badge, IconButton, Popover, Stack, Typography} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {useState} from "react";
import {useFetch} from "../../../hooks/useFetch.tsx";
import {FetchResponseNotification} from "../../notifications/interfaces/fetch-response-notification.interface.ts";
import {Notification} from "./Notification.tsx";

export const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClickNotifications = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleCloseNotifications = () => setAnchorEl(null)

  const openNotifications = Boolean(anchorEl);
  const notificationsId = openNotifications
    ? "notification-popover"
    : undefined;

  const basePath = import.meta.env.VITE_APP_URI;
  const url = `${basePath}/alert?read=false`;
  const {data, isLoading, errorMessage} = useFetch<FetchResponseNotification>({
    method: "GET",
    path: url,
    dependencies: [openNotifications],
    timePolling: 5000
  })

  return (
    <>
      <IconButton edge="end" onClick={handleClickNotifications}>
        <Badge badgeContent={data?.data.length ?? 0} color="error">
          <NotificationsIcon sx={{color: "#ffd733"}}/>
        </Badge>
      </IconButton>

      <Popover
        id={notificationsId}
        open={openNotifications}
        anchorEl={anchorEl}
        onClose={handleCloseNotifications}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Stack minWidth={'300px'}>
          {
            isLoading && !errorMessage && <Typography>Loading...</Typography>
          }

          {
            errorMessage && <Typography>{errorMessage.message}</Typography>
          }

          {!isLoading && !errorMessage && data?.data && (
            data.data.map((notification) => (
              <Notification key={notification.id} {...notification}
                            handleCloseNotifications={handleCloseNotifications}/>
            ))
          )}
        </Stack>
      </Popover>
    </>
  );
};