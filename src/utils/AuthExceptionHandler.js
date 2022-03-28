import axios from "axios";

export function setupAuthExceptionHandler(logoutUser, navigate, dataDispatch) {
	const UNAUTHORIZED = 401;

	axios.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error?.response?.status === UNAUTHORIZED) {
				logoutUser({ dataDispatch });

				navigate("login");
			}
			return Promise.reject(error);
		}
	);
}
