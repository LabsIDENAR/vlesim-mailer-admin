import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Table} from "@mui/material";
import {columnsTable} from "../data.ts";
import {Notification} from "../interfaces/notification.interface.ts";

interface TableProps {
  notifications: Notification[]
}

export function TableNotification({notifications}: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnsTable.map((column, index) => (
              <TableCell key={index}>
                <Typography fontSize={'16px'} fontWeight={'700'}>{column.value}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            notifications.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.campaignId}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>{row.type}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table;