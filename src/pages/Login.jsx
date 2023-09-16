import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useState } from "react";
import "./styles/login.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import googleIcon from "../assets/google-icon.png";
import main from "../assets/main-bg.png";
import blueEllipse from "../assets/blue-ellipse.png";
import redEllipse from "../assets/red-ellipse.png";
import topSquare from "../assets/top-square.png";
import bottomSquare from "../assets/bottom-square.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../helper/AuthContext";
import { signInWithGoogle } from "../firebase";

const theme = createTheme({
	typography: {
		button: {
			textTransform: "none",
			fontSize: "18px",
		},
	},
	palette: {
		primary: {
			main: "#154886",
		},
		secondary: {
			main: "#E3E8EF",
		},
	},
});

const Login = () => {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);
	const { email, setEmail } = useContext(AuthContext);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => {
		axios
			.get("http://localhost:3000/user")
			.then((resp) => {
				if (resp.data.email === email && resp.data.password === password) {
					navigate("/dashboard");
					console.log("success");
				}

				if (resp.data.email !== email && resp.data.password !== password) {
					alert("Tidak sesuai");
				}

				if (resp.data.password !== password) {
					setIsValidPassword(true);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid2 container spacing={0} columns={16}>
				<Grid2 xs={8}>
					<section className="sec1">
						<img src={main} alt="main-img" width={500} />
						<img
							src={blueEllipse}
							alt="decoration-1"
							id="blueEllipse"
							width={30}
						/>
						<img src={redEllipse} alt="decoration-2" id="redEllipse" />
					</section>
				</Grid2>
				<Grid2 xs={8}>
					<section className="sec2">
						<img src={bottomSquare} alt="decoration-3" id="bottomSquare" />
						<img src={topSquare} alt="decoration-4" id="topSquare" />
						<h1>Welcome Back</h1>
						<form onSubmit={handleSubmit(onSubmit)} className="form-container">
							<div className="input-container">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									placeholder="Email"
									{...register("email", { required: true })}
									onChange={(e) => setEmail(e.target.value)}
								/>
								{/* {errors.email && <p>Masukkan alamat email yang sesuai</p>} */}
							</div>

							<div className="input-container">
								<label htmlFor="Password">Password</label>
								<input
									className={isValidPassword && "field-password"}
									type={!showPassword ? "password" : "text"}
									placeholder="Password"
									{...register("password", { required: true })}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<div
									className="show-pass"
									onClick={() => setShowPassword(!showPassword)}
								>
									{!showPassword ? (
										<AiOutlineEyeInvisible size={20} color="#97A3B6" />
									) : (
										<AiOutlineEye size={20} color="#97A3B6" />
									)}
								</div>
								{isValidPassword && <p>Password is incorrect</p>}
							</div>
							<div className="btn-login">
								<Button
									color="primary"
									variant="contained"
									type="submit"
									fullWidth
								>
									Sign In
								</Button>
							</div>
							<p className="break-point">
								<span>Or</span>
							</p>
							<div className="btn-google">
								<button onClick={signInWithGoogle}>
									<img src={googleIcon} alt="sign in with google" width={28} />
									Sign In With Google
								</button>
							</div>
						</form>
					</section>
				</Grid2>
			</Grid2>
		</ThemeProvider>
	);
};

export default Login;
