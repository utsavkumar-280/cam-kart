import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ path, ...props }) => {
	const isLoggedIn = false;

	return isLoggedIn ? (
		<Route {...props} path={path} />
	) : (
		<Navigate state={{ from: path }} replace to="/login" />
	);
};
