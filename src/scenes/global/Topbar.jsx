
import { Box, IconButton, useTheme, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { colorModeContext, tokens } from "../../theme.js";
import InputBase from "@mui/material/InputBase";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutLined";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutLined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutLined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutLined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);

  const [notifAnchorEl, setNotifAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleNotifClick = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setNotifAnchorEl(null);
    setProfileAnchorEl(null);
  };



  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* {SEARCH BAR} */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode} aria-label="Toggle light/dark mode" title="light">
          {theme.palette.mode === "dark" ? (
            <DarkModeOutLinedIcon />
          ) : (
            <LightModeOutLinedIcon />
          )}
        </IconButton>

        {/* Notifications Icon with Dropdown */}
        <IconButton onClick={handleNotifClick} aria-label="Open notifications" title="notifications">
          <NotificationsOutLinedIcon />
        </IconButton>
        <Menu
          anchorEl={notifAnchorEl}
          open={Boolean(notifAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>No new notifications</MenuItem>
        </Menu>

        {/* Settings Icon */}
        <IconButton aria-label="Settings" title="settings">
          <SettingsOutLinedIcon />
        </IconButton>

        {/* User Icon with Dropdown */}
        <IconButton onClick={handleProfileClick} aria-label="Open profile menu" title="Profile menu">
          <PersonOutLinedIcon />
        </IconButton>
        <Menu
          anchorEl={profileAnchorEl}
          open={Boolean(profileAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
