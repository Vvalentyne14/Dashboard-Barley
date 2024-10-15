import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutLined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutLined";
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutLined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutLined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutLined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutLined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutLined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutLined";
import PieChartOutLinedIcon from "@mui/icons-material/PieChartOutLined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutLined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutLined";
import MapOutLinedIcon from "@mui/icons-material/MapOutLined";
import userImage from "../../assets/user2.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none", color: colors.grey[100] }}>
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        {/* Conditionally render the title based on isCollapsed */}
        {!isCollapsed && <Typography>{title}</Typography>}
      </MenuItem>
    </Link>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar": {
          height: "100%",
        },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
          width: isCollapsed ? "80px" : "max-content", // Adjust the width based on collapse state
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 0px !important",
          display: "flex",
          gap: ".1em",
          width: "100%",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo and Menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutLinedIcon /> : undefined}
            style={{
              margin: "0px 0 0px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography>ADMINIS</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutLinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="60px"
                  height="60px"
                  src={userImage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Barley
                </Typography>

                <Typography variant="h5" color={colors.greenAccent[500]}>
                  CEO SoundKodee
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={!isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed} // Pass the collapsed state
            />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 1px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Invoice Balances"
              to="/invoices"
              icon={<ReceiptOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 1px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 1px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
          </Box>

          {/* LOGOUT ITEM AT THE BOTTOM */}
          <Box
            mt="auto" // This pushes the Logout to the bottom
            paddingLeft={!isCollapsed ? undefined : "10%"}
          >
            {selected === "Dashboard" && (
              <Item
                title="Log Out"
                to="/logout"
                icon={<LogoutOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
