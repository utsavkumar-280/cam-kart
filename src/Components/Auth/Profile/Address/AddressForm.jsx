import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { CircleSpinner } from "react-spinners-kit";
import * as Yup from "yup";
import axios from "axios";

import "./address.css";
import { CAMKART_API } from "../../../../utils";
import { useAuth } from "../../../../Context";

export const AddressForm = ({ thisAddress, setEditable, setEditorOpen }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [addressError, setAddressError] = useState("");
	const {
		state: { token },
		dispatch,
	} = useAuth();

	const formSubmit = async ({
		fullName,
		buildingName,
		pincode,
		city,
		state,
		phone,
	}) => {
		try {
			setAddressError("");
			setIsLoading(true);

			let url = thisAddress
				? `${CAMKART_API}/addresses/${thisAddress._id}`
				: `${CAMKART_API}/addresses`;

			const {
				data: { response },
			} = await axios({
				method: "POST",
				url,
				data: {
					fullName,
					buildingName,
					pincode,
					city,
					state,
					phone,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setIsLoading(false);
			dispatch({
				type: "SET_ADDRESS_DETAILS",
				payload: { addressDetails: response },
			});
			document.body.style.overflow = "visible";
			thisAddress ? setEditable(false) : setEditorOpen(false);
		} catch (error) {
			console.log(error);
			setAddressError("Please try again!");
		}
	};

	useEffect(() => {
		return () => {
			setIsLoading(false);
		};
	}, []);

	return (
		<div className="address-modal-conatiner">
			<div className="address-modal-content">
				<div className="form-card border1">
					<Formik
						initialValues={{
							fullName: `${thisAddress?.fullName || ""}`,
							buildingName: `${thisAddress?.buildingName || ""}`,
							pincode: `${thisAddress?.pincode || ""}`,
							city: `${thisAddress?.city || ""}`,
							state: `${thisAddress?.state || ""}`,
							phone: `${thisAddress?.phone || ""}`,
						}}
						validationSchema={Yup.object({
							fullName: Yup.string()
								.max(15, "Must be 15 characters or less")
								.required("Name is required"),
							buildingName: Yup.string().required("Building name is required"),
							pincode: Yup.string().required("Pincode is required"),
							city: Yup.string().required("City name isequired"),
							state: Yup.string().required("State is required"),
							phone: Yup.string().required("Phone no. is required"),
						})}
						onSubmit={(
							{ fullName, buildingName, pincode, city, state, phone },
							{ setSubmitting }
						) => {
							formSubmit({
								fullName,
								buildingName,
								pincode,
								city,
								state,
								phone,
							});
							setSubmitting(false);
						}}
					>
						<Form className="form-field-container">
							<div className="input-control">
								<label htmlFor="fullName" className="form-label">
									Name
								</label>
								<div className="input-field-container">
									<Field
										name="fullName"
										type="text"
										placeholder="Enter your full name"
										className="input-field pad1"
									/>
								</div>

								<ErrorMessage name="fullName" className="form-error" />
							</div>
							<div className="input-control">
								<label htmlFor="buildingName" className="form-label">
									Building name
								</label>
								<div className="input-field-container">
									<Field
										name="buildingName"
										type="text"
										placeholder="Enter your building details"
										className="input-field pad1"
									/>
								</div>

								<ErrorMessage name="buildingName" className="form-error" />
							</div>
							<div className="input-control">
								<label htmlFor="pincode" className="form-label">
									Pincode
								</label>
								<div className="input-field-container">
									<Field
										name="pincode"
										type="text"
										placeholder="Enter your pincode"
										className="input-field pad1"
									/>
								</div>

								<ErrorMessage name="pincode" className="form-error" />
							</div>
							<div className="input-control">
								<label htmlFor="city" className="form-label">
									City
								</label>
								<div className="input-field-container">
									<Field
										name="city"
										type="text"
										placeholder="Enter city name"
										className="input-field pad1"
									/>
								</div>

								<ErrorMessage name="city" className="form-error" />
							</div>
							<div className="input-control">
								<label htmlFor="state" className="form-label">
									State
								</label>
								<div className="input-field-container">
									<Field
										name="state"
										type="text"
										placeholder="Enter text"
										className="input-field pad1"
									/>
								</div>

								<ErrorMessage name="state" className="form-error" />
							</div>
							<div className="input-control">
								<label htmlFor="text" className="form-label">
									Phone
								</label>
								<div className="input-field-container">
									<Field
										name="phone"
										type="text"
										placeholder="Enter text"
										className="input-field pad1"
									/>
								</div>

								<ErrorMessage name="phone" className="form-error" />
							</div>

							<div className="login-error">{addressError}</div>
							<div className="align-horizontal">
								<button
									type="submit"
									className="form-submit-cta address-form-cta"
								>
									{isLoading ? (
										<>
											<p style={{ paddingRight: "1rem" }}>Saving</p>
											<CircleSpinner size={20} loading />
										</>
									) : (
										"Save"
									)}
								</button>
								<button
									type="button"
									onClick={() => {
										document.body.style.overflow = "visible";
										thisAddress ? setEditable(false) : setEditorOpen(false);
									}}
									className="form-submit-cta cta-outlined address-form-cta"
								>
									Cancel
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};
