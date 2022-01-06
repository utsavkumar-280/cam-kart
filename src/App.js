import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { setupAuthExceptionHandler } from "./utils";

import {
	Footer,
	Header,
	Home,
	ProductsCatalog,
	PrivateRoute,
	Wishlist,
	Login,
	Profile,
	Order,
	Address,
	Cart,
	ForgotPassword,
	Signup,
	NotFoundPage,
} from "./Components";
import { useAppDataContext, useAuth } from "./Context";
import {
	callProducts,
	callWishlist,
	callCart,
	callAddress,
	callOrders,
} from "./utils";
import { ProfileInfo } from "./Components/Auth/Profile/ProfileInfo";

const App = () => {
	const navigate = useNavigate();
	const { dispatch } = useAppDataContext();
	const {
		state: { token },
		logout,
		dispatch: authDispatch,
	} = useAuth();

	useEffect(() => {
		setupAuthExceptionHandler(logout, navigate);
	}, [logout, navigate]);

	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		callProducts(dispatch);
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			callWishlist(dispatch, token);
			callCart(dispatch, token);
			callAddress(authDispatch, token);
			callOrders(dispatch, token);
		}
	}, [token, authDispatch, dispatch]);

	//console.log({ state });

	return (
		<div className="app-container">
			<div className="app-main">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductsCatalog />} />

					<PrivateRoute path="/wishlist" element={<Wishlist />} />
					<PrivateRoute path="/cart" element={<Cart />} />
					<PrivateRoute path="/profile" element={<Profile />}>
						<PrivateRoute path="/" element={<ProfileInfo />} />
						<PrivateRoute path="/addresses" element={<Address />} />
						<PrivateRoute path="/orders" element={<Order />} />
					</PrivateRoute>
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
