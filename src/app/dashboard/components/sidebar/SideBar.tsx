import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  styled,
} from "@mui/material";
import {
  ExpandMore,
  Email,
  Assessment,
  Settings,
  Notifications,
} from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { MenuItemProps } from "./interfaces";

const drawerWidth = "276px";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.default,
    marginTop: "64px",
    paddingTop: "15px",
  },
}));

const NestedListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
}));

const menuItems: MenuItemProps[] = [
  {
    title: "Email Tools",
    icon: <Email />,
    subItems: [{ title: "Campaign", content: <div>Campaign Section</div> }],
  },
  {
    title: "Reports",
    icon: <Assessment />,
    subItems: [
      {
        title: "Sending Overview",
        content: <div>Sending Overview Section</div>,
      },
    ],
  },
  {
    title: "Configuration",
    icon: <Settings />,
    subItems: [
      { title: "Domain Manager", content: <div>Domain Manager Section</div> },
    ],
  },
  {
    title: "Notifications",
    icon: <Notifications />,
    subItems: [{ title: "Item X", content: <div>Item X Section</div> }],
  },
];

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon,
  subItems,
  onItemClick,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {subItems && (open ? <ExpandMore /> : <KeyboardArrowRightIcon />)}
        </ListItemButton>
      </ListItem>
      {subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems.map((item, index) => (
              <NestedListItem key={index} disablePadding>
                <ListItemButton onClick={() => onItemClick?.(item.content)}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </NestedListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const Sidebar: React.FC<{
  onItemClick: (content: React.ReactNode) => void;
}> = ({ onItemClick }) => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} onItemClick={onItemClick} />
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
