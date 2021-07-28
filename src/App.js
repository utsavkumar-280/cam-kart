import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { setupAuthExceptionHandler } from "./utils";
import { CAMKART_API } from "./utils";

import {
	Footer,
	Header,
	Home,
	ProductDetail,
	ProductsCatalog,
	PrivateRoute,
	Wishlist,
	Login,
	Profile,
	Cart,
	ForgotPassword,
	Signup,
	NotFoundPage,
} from "./Components";
import { useAppDataContext, useAuth } from "./Context";
import { callProducts } from "./utils";

const App = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useAppDataContext();
	const {
		state: { token },
		logout,
	} = useAuth();

	useEffect(() => {
		setupAuthExceptionHandler(logout, navigate);
	}, []);

	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { response },
				} = await callProducts(`${CAMKART_API}/products`);

				dispatch({ type: "SET_PRODUCTS", payload: response });
			} catch (error) {
				console.log(error);
			}
		})();
	}, [dispatch]);

	console.log({ state });

	return (
		<div className="app-container">
			<div className="app-main">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductsCatalog />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<PrivateRoute path="/wishlist" element={<Wishlist />} />
					<PrivateRoute path="/cart" element={<Cart />} />
					<PrivateRoute path="/profile" element={<Profile />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/forgot-pass" element={<ForgotPassword />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
