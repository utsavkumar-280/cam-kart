import axios from "axios";
import { isPresentInArray } from "./arrayModifiers";
import { CAMKART_API } from "./data";

export const callProducts = async (dispatch) => {
	try {
		const {
			data: { response },
		} = await axios({
			method: "GET",
			url: `${CAMKART_API}/products`,
		});

		dispatch({ type: "SET_PRODUCTS", payload: response });
	} catch (error) {
		console.log(error);
	}
};

export const callWishlist = async (dispatch, token) => {
	try {
		const {
			data: { response },
		} = await axios({
			method: "GET",
			url: `${CAMKART_API}/wishlist`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch({ type: "SET_WISHLIST", payload: response });
	} catch (error) {
		console.log(error);
	}
};

export const callCart = async (dispatch, token) => {
	try {
		const {
			data: { response },
		} = await axios({
			method: "GET",
			url: `${CAMKART_API}/cart`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({ type: "SET_CART", payload: response });
	} catch (error) {
		console.log(error);
	}
};

export const callOrders = async (dispatch, token) => {
	try {
		const {
			data: { response },
		} = await axios({
			method: "GET",
			url: `${CAMKART_API}/orders`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({ type: "SET_ORDERS", payload: response });
	} catch (error) {
		console.log(error);
	}
};
