import {
  Dashboard as DashboardIcon,
  Add as AddIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import PaymentsIcon from "@mui/icons-material/Payments";

export const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Add Fund", icon: <AddIcon />, path: "/add-fund" },
  { text: "Badges", icon: <StarIcon />, path: "/badges" },
  { text: "Payout", icon: <PaymentsIcon />, path: "/payout" },
];
