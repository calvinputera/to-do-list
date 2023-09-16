import React from "react";
import SideNav from "../components/SideNav";
import "./styles/todo.css";
import {
	Box,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	FormControlLabel,
	Checkbox,
	DialogContentText,
} from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

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
	const [openDeleteChecked, setOpenDeleteChecked] = React.useState(false);
	const [openDeleteNotChecked, setOpenDeleteNotChecked] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [checked, setChecked] = React.useState([true, false]);

	const handleChange1 = (event) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event) => {
		setChecked([checked[0], event.target.checked]);
	};

	const children = (
		<Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
			<FormControlLabel
				label="Child 1"
				control={
					<Checkbox
						checked={checked[0]}
						color="success"
						onChange={handleChange2}
					/>
				}
			/>
			<FormControlLabel
				label="Child 2"
				control={
					<Checkbox
						checked={checked[1]}
						color="success"
						onChange={handleChange3}
					/>
				}
			/>
		</Box>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<SideNav />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<div className="todo-btn">
					<h1>📝 Todo</h1>
					<div>
						<Button variant="outlined" onClick={handleClickOpen}>
							Created Todo
						</Button>
						<BootstrapDialog
							onClose={handleClose}
							aria-labelledby="customized-dialog-title"
							open={open}
							maxWidth="sm"
							fullWidth
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
				<div className="todo-container">
					<div className="todo-notchecked">
						<p>Not Checked</p>
						<div className="todo-item">
							<FormControlLabel
								label="Parent"
								control={
									<Checkbox
										checked={checked[0] && checked[1]}
										indeterminate={checked[0] !== checked[1]}
										onChange={handleChange1}
										color="success"
									/>
								}
							/>
							{children}
							<IconButton
								onClick={() => setOpenDeleteChecked(!openDeleteNotChecked)}
							>
								<DeleteTwoToneIcon />
							</IconButton>
							<Dialog
								open={openDeleteNotChecked}
								onClose={() => setOpenDeleteNotChecked(false)}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
								fullWidth
							>
								<DialogTitle id="alert-dialog-title">
									Confirm Delete
								</DialogTitle>
								<DialogContent dividers>
									<p>Are you sure want to delete?</p>
								</DialogContent>
								<DialogActions>
									<Button
										onClick={() => setOpenDeleteNotChecked(false)}
										variant="contained"
									>
										Confirm
									</Button>
									<Button
										onClick={() => setOpenDeleteNotChecked(false)}
										autoFocus
									>
										Cancel
									</Button>
								</DialogActions>
							</Dialog>
							<p className="todo-date">Today</p>
						</div>
					</div>
					<div className="todo-checked">
						<p>Checked</p>
						<div className="todo-item">
							<FormControlLabel
								label="Parent"
								control={
									<Checkbox
										checked={checked[0] && checked[1]}
										indeterminate={checked[0] !== checked[1]}
										onChange={handleChange1}
										color="success"
									/>
								}
							/>
							{children}
							<IconButton
								onClick={() => setOpenDeleteChecked(!openDeleteChecked)}
							>
								<DeleteTwoToneIcon />
							</IconButton>
							<Dialog
								open={openDeleteChecked}
								onClose={() => setOpenDeleteChecked(false)}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
								fullWidth
							>
								<DialogTitle id="alert-dialog-title">
									Confirm Delete
								</DialogTitle>
								<DialogContent dividers>
									<p>Are you sure want to delete?</p>
								</DialogContent>
								<DialogActions>
									<Button
										onClick={() => setOpenDeleteChecked(false)}
										variant="contained"
									>
										Confirm
									</Button>
									<Button onClick={() => setOpenDeleteChecked(false)} autoFocus>
										Cancel
									</Button>
								</DialogActions>
							</Dialog>
							<p className="todo-date">Today</p>
						</div>
					</div>
				</div>
			</Box>
		</Box>
	);
};

export default Todo;
