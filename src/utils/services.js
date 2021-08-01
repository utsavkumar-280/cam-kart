import axios from "axios";
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
		console.log({ callWishlistResponse: response });
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

export const callAddress = async (dispatch, token) => {
	try {
		const {
			data: { response },
		} = await axios({
			method: "GET",
			url: `${CAMKART_API}/addresses`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log({ addressResponse: response });
		dispatch({
			type: "SET_ADDRESS_DETAILS",
			payload: { addressDetails: response },
		});
	} catch (error) {
		console.log(error);
	}
};

export const removeAddress = async ({ dispatch, token, address, setError }) => {
	try {
		const {
			data: { response },
		} = await axios({
			method: "DELETE",
			url: `${CAMKART_API}/addresses/${address._id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch({
			type: "SET_ADDRESS_DETAILS",
			payload: { addressDetails: response },
		});
	} catch (error) {
		console.log(error);
		setError("Please Try Again!");
	}
};

export const addToWishlist = async ({
	dispatch,
	token,
	product,
	setDisable,
}) => {
	setDisable(true);
	try {
		const {
			data: { response },
		} = await axios({
			method: "POST",
			url: `${CAMKART_API}/wishlist`,
			data: {
				_id: product._id,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log({ WISHLISTresponse: response });
		dispatch({ type: "SET_WISHLIST", payload: response });
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const addToCart = async ({ dispatch, product, setDisable, token }) => {
	setDisable(true);
	try {
		const {
			data: { response },
		} = await axios({
			method: "POST",
			url: `${CAMKART_API}/cart`,
			data: {
				_id: product._id,
				quantity: 1,
				isActive: true,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// console.log({ response });
		dispatch({ type: "SET_CART", payload: response });
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const incProductInCart = async ({
	dispatch,
	product,
	quantity,
	setDisable,
	token,
}) => {
	setDisable(true);
	try {
		const {
			data: { response },
		} = await axios({
			method: "POST",
			url: `${CAMKART_API}/cart`,
			data: {
				_id: product._id,
				quantity: quantity + 1,
				isActive: true,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({ type: "SET_CART", payload: response });
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const decProductInCart = async ({
	dispatch,
	product,
	quantity,
	setDisable,
	token,
}) => {
	setDisable(true);
	try {
		const {
			data: { response },
		} = await axios({
			method: "POST",
			url: `${CAMKART_API}/cart`,
			data: {
				_id: product._id,
				quantity: quantity - 1,
				isActive: true,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({ type: "SET_CART", payload: response });
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const removeProductInCart = async ({
	dispatch,
	product,
	setDisable,
	token,
}) => {
	setDisable(true);
	try {
		const {
			data: { response },
		} = await axios({
			method: "POST",
			url: `${CAMKART_API}/cart`,
			data: {
				_id: product._id,
				quantity: 0,
				isActive: false,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({ type: "SET_CART", payload: response });
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};
