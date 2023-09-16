import React from "react";
import SideNav from "../components/SideNav";
import {
	Box,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

const Todo = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<SideNav />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<div className="">
					<h1>📝 Todo</h1>
					<div>
						<Button variant="outlined" onClick={handleClickOpen}>
							Created Todo
						</Button>
						<BootstrapDialog
							onClose={handleClose}
							aria-labelledby="customized-dialog-title"
							open={open}
							maxWidth="md"
						>
							<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
								Add Todo
							</DialogTitle>
							<IconButton
								aria-label="close"
								onClick={handleClose}
								sx={{
									position: "absolute",
									right: 8,
									top: 8,
									color: (theme) => theme.palette.grey[500],
								}}
							>
								<CloseIcon />
							</IconButton>
							<DialogContent dividers>
								<div className="input-container">
									<label htmlFor="email">Todo</label>
									<input type="text" placeholder="todo" />
								</div>

								<div className="input-container">
									<label htmlFor="email">Date</label>
									<input type="date" placeholder="todo" />
								</div>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} variant="contained">
									Save
								</Button>
								<Button onClick={handleClose} variant="outlined">
									Cancel
								</Button>
							</DialogActions>
						</BootstrapDialog>
					</div>
				</div>
				<div>
					<div>
						<p>Not Checked</p>
						<div>
							<FormControlLabel
								control={<Checkbox defaultChecked color="success" />}
								label="Label"
							/>
							<p>Date</p>
						</div>
					</div>
					<div>
						<p>Checked</p>
					</div>
				</div>
			</Box>
		</Box>
	);
};

export default Todo;
