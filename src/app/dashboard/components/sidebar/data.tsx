import {
    Email,
    Assessment,
    Settings,
    Notifications,
  } from "@mui/icons-material";
import { MenuItemData } from "./interfaces";

export const menuItems: MenuItemData[] = [
    {
      title: "Email Tools",
      icon: <Email />,
      subItems: [{ title: "Campaign", path: "/email/campaign" }],
    },
    {
      title: "Reports",
      icon: <Assessment />,
      subItems: [
        { title: "Sending Overview", path: "/dashboard/reports/sending-overview" },
        { title: "Delivered Messages", path: "/dashboard/reports/delivered-messages" },
        { title: "Failed Messages", path: "/dashboard/reports/failed-messages" },
        { title: "Complaints", path: "/dashboard/reports/complaints" },
        { title: "Engagement Tracking", path: "/dashboard/reports/engagement-tracking" },
        { title: "Current Usage", path: "/dashboard/reports/current-usage" },
      ],
    },
    {
      title: "Configuration",
      icon: <Settings />,
      subItems: [
        { title: "Domain Manager", path: "/dashboard/config/domain-manager" },
        { title: "Event Webhooks", path: "/dashboard/config/event-webhooks" },
        { title: "Server Settings", path: "/dashboard/config/server-settings" },
      ],
    },
    {
      title: "Suppression List",
      icon: <Settings />,
      path: "/dashboard/supresionList",
    },
    {
      title: "Notifications",
      icon: <Notifications />,
      subItems: [{ title: "Item X", path: "/dashboard/notifications/item-x" }],
    },
  ];