import { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CircleSpinner } from "react-spinners-kit";

import { useAuth } from "../../Context";
import "./authStyles.css";

export const Login = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [loginError, setLoginError] = useState("");
	const { state } = useLocation();
	const previousPath = { from: state?.from ? state.from : "/" };

	useEffect(() => {
		return () => {
			setIsLoading(false);
		};
	}, []);

	const {
		state: { token },
		login,
	} = useAuth();

	const formSubmit = async ({
		email,
		password,
		from,
		setLoginError,
		setIsLoading,
		login,
	}) => {
		setLoginError("");
		setIsLoading(true);

		const response = await login({ email, password, from });

		if (response?.status !== 200) {
			setLoginError(response?.data?.message || "Please try again!");
			setIsLoading(false);
		}
	};

	return (
		<div className="form-container">
			<div className="form-main">
				{token ? (
					<Navigate to="/profile" replace />
				) : (
					<div className="form-card">
						<h1 className="form-head">Login</h1>
						<Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={Yup.object({
								email: Yup.string()
									.email("Invalid email address")
									.required("Email required"),
								password: Yup.string()
									.min(8, "pasword must be 8 characters or more")
									.required("Password required"),
							})}
							onSubmit={({ email, password }, { setSubmitting }) => {
								formSubmit({
									email,
									password,
									from: previousPath,
									login,
									setIsLoading,
									setLoginError,
								});
								setSubmitting(false);
							}}
						>
							{(props) => (
								<Form className="form-field-container">
									<div className="input-control">
										<label htmlFor="email" className="form-label">
											Email Address
										</label>
										<div className="input-field-container">
											<Field
												name="email"
												type="email"
												placeholder="Enter email"
												className="input-field"
											/>
										</div>

										<ErrorMessage name="email" className="form-error" />
									</div>

									<div className="input-control">
										<label htmlFor="password" className="form-label">
											Password
										</label>
										<div className="input-field-container">
											<span className="input-grid width100">
												<Field
													name="password"
													placeholder="Enter password"
													className="input-pass-field"
													type={isHidden ? "password" : "text"}
												/>
												<button
													type="button"
													className="input-pass-cta"
													onClick={() => setIsHidden((isHidden) => !isHidden)}
												>
													{isHidden ? (
														<FaEyeSlash className="hide-cta" />
													) : (
														<FaEye className="hide-cta" />
													)}
												</button>
											</span>
										</div>
										<ErrorMessage name="password" className="form-error" />
									</div>
									<div className="login-error">{loginError}</div>
									<button type="submit" className="form-submit-cta">
										{isLoading ? (
											<>
												<p style={{ paddingRight: "1rem" }}>Logging in</p>
												<CircleSpinner size={20} loading />
											</>
										) : (
											"Login"
										)}
									</button>

									<p
										className="form-text marginTop1"
										onClick={() => {
											props.setFieldValue("email", "tester@gmail.com");
											props.setFieldValue("password", "P@ssw0rd");
										}}
									>
										<span className="form-links">Fill Test Credentials</span>
									</p>

									<p className="form-text marginTop1">
										Not Registered yet?
										<span>
											<Link
												to="/signup"
												state={previousPath}
												className="form-links"
											>
												Sign up
											</Link>
										</span>
									</p>
								</Form>
							)}
						</Formik>
					</div>
				)}
			</div>
		</div>
	);
};
