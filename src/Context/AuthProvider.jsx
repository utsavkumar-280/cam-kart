import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "../Reducer";
import { CAMKART_API } from "../utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { userFirstName, userLastName, userEmail, token } = JSON.parse(
		localStorage.getItem("user_cred")
	) || {
		userFirstName: "",
		userLastName: "",
		userEmail: "",
		token: "",
	};

	const initialState = {
		token,
		userDetails: {
			userFirstName,
			userLastName,
			userEmail,
		},
		addressDetails: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);
	console.log({ authState: state });
	const navigate = useNavigate();

	const signup = async ({ firstname, lastname, email, password }) => {
		try {
			const {
				data: { message },
				status,
			} = await axios.post(`${CAMKART_API}/users`, {
				firstname,
				lastname,
				email,
				password,
			});

			console.log({ message });
			return { status };
		} catch (error) {
			console.error(error);
			return error.response;
		}
	};

	const login = async ({ email, password, from }) => {
		try {
			const {
				data: {
					response: { userFirstName, userLastName, userEmail, token },
				},
				status,
			} = await axios({
				method: "POST",
				url: `${CAMKART_API}/users/login`,
				headers: { email, password },
			});

			if (status === 200) {
				localStorage?.setItem(
					"user_cred",
					JSON.stringify({
						userFirstName,
						userLastName,
						userEmail,
						token,
					})
				);
			}

			dispatch({
				type: "LOGIN",
				payload: {
					userFirstName,
					userLastName,
					userEmail,
					token,
				},
			});

			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			navigate(from);
		} catch (error) {
			console.error(error);
			return error.response;
		}
	};

	const updatePassword = async ({ email, password }) => {
		try {
			const {
				data: { message },
				status,
			} = await axios.post(`${CAMKART_API}/users/password-reset`, {
				email,
				password,
			});

			console.log({ message });
			if (status === 200) {
				return { status };
			}
		} catch (error) {
			console.error(error);
			return error.response;
		}
	};

	const logout = ({ dataDispatch }) => {
		delete axios.defaults.headers.common["Authorization"];
		localStorage?.removeItem("user_cred");
		dispatch({ type: "LOGOUT" });
		dataDispatch({ type: "LOGOUT_DATA_RESET" });
	};

	return (
		<AuthContext.Provider
			value={{
				state,
				dispatch,
				signup,
				login,
				logout,
				updatePassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
