import { MdAccountCircle } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiLuggageDepositFill } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbClockDollar } from "react-icons/tb";
import { RiWallet2Fill } from "react-icons/ri";
import { BsFillGearFill } from "react-icons/bs";

export const menuLink = [
    {text: 'Account' ,icon: <MdAccountCircle/>, path: '/my-account'},
    {text: 'Invest' ,icon: <FaHandHoldingDollar/>, path: '/invest'},
    {text: 'My Deposits' ,icon: <RiLuggageDepositFill/>, path: '/my-deposits'},
    {text: 'Reinvest' ,icon: <RiExchangeDollarLine/>, path: '/reinvest'},
    {text: 'Withdraw' ,icon: <BiMoneyWithdraw/>, path: '/withdraw'},
    {text: 'Transaction History' ,icon: <TbClockDollar/>, path: '/transaction-history'},
    {text: 'Wallets' ,icon: <RiWallet2Fill/>, path: '/wallets'},
    {text: 'Settings' ,icon: <BsFillGearFill/>, path: '/settings'},
]