import {
  Dashboard as DashboardIcon,
  Add as AddIcon,
  History as HistoryIcon,
  Star as StarIcon,
  Payment as PaymentIcon,
  Support as SupportIcon,
} from "@mui/icons-material";
import MovingIcon from "@mui/icons-material/Moving";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PaymentsIcon from "@mui/icons-material/Payments";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import MoveUpIcon from "@mui/icons-material/MoveUp";

export const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Add Fund", icon: <AddIcon />, path: "/add-fund" },
  { text: "Badges", icon: <StarIcon />, path: "/badges" },
  { text: "Payout", icon: <PaymentsIcon />, path: "/payout" },
];
