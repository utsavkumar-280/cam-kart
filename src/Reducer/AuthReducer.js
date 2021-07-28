export const AuthReducer = (state, { type, payload }) => {
	switch (type) {
		case "LOGIN":
			return {
				...state,
				token: payload.token,
				userDetails: {
					userFirstName: payload.userFirstName,
					userLastName: payload.userLastName,
					userEmail: payload.userEmail,
				},
			};
		case "LOGOUT":
			return {
				...state,
				token: "",
				userDetails: {
					userFirstname: "",
					userLastname: "",
					userEmail: "",
				},
				addressDetails: null,
			};
		case "SET_ADDRESS_DETAILS":
			return {
				...state,
				addressDetails: payload.addressDetails,
			};

		default:
			throw new Error("Can't handle this type of action");
	}
};
