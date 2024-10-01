import { Box, Button, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../Assets/Images/logo.png";
import { auth } from "../../../config/firebase";
import { AuthContext } from "../../../Context/AuthContext";
import GoogleTranslate from "../../../Global/GoogleTranslate/GoogleTranslate";

export const Header = () => {
	const [showModal, setShowModal] = useState(false);
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		setShowModal(true); // Show the modal when the user clicks on "Logout"
	};

	const handleCloseModal = () => {
		setShowModal(false); // Close the modal when the user cancels
	};

	const handleAgree = async () => {
		setShowModal(false); // Close the modal when the user confirms
		dispatch({ type: "LOGOUT" });

		try {
			await auth.signOut();
			localStorage.setItem("loggedIn", "false");
			navigate("/login"); // Redirect to login after signing out
		} catch (error) {
			console.error("Failed to sign out:", error);
		}
	};

	const userData = localStorage.getItem("user");
	const user = JSON.parse(userData);
	const name = user?.name || "User"; // Fallback in case user data is null

	return (
		<div>
			<div className="bg-primary1 text-white flex justify-between items-center px-4 py-2">
				<img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />

				{/* Right Side Flex for Google Translate and User Actions */}
				<div className="flex items-center gap-4">
					<GoogleTranslate />

					<div className="hidden md:flex gap-2">
						<Link to="/invest">
							<button className="bg-green-500 font-bold hover:opacity-[.6] text-sm p-2 px-4 rounded-3xl">
								Deposit
							</button>
						</Link>
						<Link to="/withdraw">
							<button className="bg-red-500 font-bold hover:opacity-[.6] text-sm p-2 px-4 rounded-3xl">
								Withdraw
							</button>
						</Link>
					</div>
					{/* User Actions - Name and Logout Button */}
					<Link to="/my-account">
						<button className="hidden md:block lowercase font-bold p-1 lg:p-2 rounded-3xl text-sm lg:text-base border-[1px] border-white shadow-lg">
							{name}
						</button>
					</Link>
					<button
						onClick={handleLogoutClick}
						className="bg-white text-secondary2 text-sm lg:text-base opacity-[.6] font-bold p-1 lg:p-2 rounded-3xl border-[1px] border-white shadow-lg hover:opacity-[1]">
						Logout
					</button>
				</div>
			</div>

			{/* Modal for logout confirmation */}
			<Modal open={showModal} onClose={handleCloseModal}>
				<Box
					sx={{
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}>
					<Box
						sx={{
							backgroundColor: "black",
							color: "white",
							padding: "20px",
							borderRadius: "10px",
							textAlign: "center",
						}}>
						<h2>Confirm Logout</h2>
						<p>Are you sure you want to log out?</p>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-around",
								marginTop: "10px",
							}}>
							<Button variant="contained" color="primary" onClick={handleAgree}>
								Yes
							</Button>
							<Button
								variant="contained"
								color="secondary"
								onClick={handleCloseModal}>
								No
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};
