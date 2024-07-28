import {
 
  Dashboard as DashboardIcon,
  Add as AddIcon,
  History as HistoryIcon,
  Star as StarIcon,
  Payment as PaymentIcon,
  Support as SupportIcon,
} from "@mui/icons-material";
import MovingIcon from "@mui/icons-material/Moving";

export const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Add Fund", icon: <AddIcon />, path: "/add-fund" },
  { text: "Badges", icon: <StarIcon />, path: "/badges" },
  { text: "Fund History", icon: <HistoryIcon />, path: "/fund-history" },
  { text: "Invest History", icon: <HistoryIcon />, path: "/invest-history" },
  { text: "My Referral", icon: <StarIcon />, path: "/my-referral" },
  { text: "Payout", icon: <PaymentIcon />, path: "/payout" },
  { text: "Payout History", icon: <HistoryIcon />, path: "/payout-history" },
  { text: "Referral Bonus", icon: <StarIcon />, path: "/referral-bonus" },
  { text: "Support Ticket", icon: <SupportIcon />, path: "/support-ticket" },
  { text: "Transaction", icon: <HistoryIcon />, path: "/transaction" },
  { text: "Transfer", icon: <MovingIcon />, path: "/transfer" },
];
