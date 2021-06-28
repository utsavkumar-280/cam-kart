import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import { useAppDataContext } from "./Context";
import { callProducts } from "./utils/networkCall";

const App = () => {
	const { dispatch } = useAppDataContext();

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
