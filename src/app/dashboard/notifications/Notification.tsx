import {
  Stack,
  Typography
} from "@mui/material";
import {Layout} from "../layout.tsx";

import {useFetch} from "../../hooks/useFetch.tsx";
import {FetchResponseNotification} from "./interfaces/fetch-response-notification.interface.ts";
import {TableNotification} from "./components/TableNotification.tsx";

function Notification() {
  const basePath = import.meta.env.VITE_APP_URI;
  const url = `${basePath}/alert`;

  const {data, isLoading, errorMessage} = useFetch<FetchResponseNotification>({
    method: "GET",
    path: url
  })

  return (
    <Layout>
      <Stack sx={{width: '100%', minHeight: 'calc(100vh - 5.5rem)'}}>
        <Typography fontSize={'36px'} fontWeight={'600'}>Notifications</Typography>
        {
          isLoading && !errorMessage && <Typography>Loading...</Typography>
        }

        {
          errorMessage && <Typography>{errorMessage.message}</Typography>
        }

        {!isLoading && !errorMessage && data?.data && (
          <TableNotification notifications={data.data}/>
        )}
      </Stack>
    </Layout>
  );
}

export default Notification;