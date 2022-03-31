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
	setIsLoading,
}) => {
	setDisable(true);
	setIsLoading(true);
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

		dispatch({ type: "SET_WISHLIST", payload: response });
		setIsLoading(false);
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const addToCart = async ({
	dispatch,
	product,
	setDisable,
	setIsLoading,
	token,
}) => {
	setDisable(true);
	setIsLoading(true);
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

		dispatch({ type: "SET_CART", payload: response });
		setIsLoading(false);
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
	token,
	setDisable,
	setIsIncreasing,
}) => {
	setDisable(true);
	setIsIncreasing(true);
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
		setIsIncreasing(false);
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
	token,
	setDisable,
	setIsDecreasing,
}) => {
	setDisable(true);
	setIsDecreasing(true);
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
		setIsDecreasing(false);
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const removeProductInCart = async ({
	dispatch,
	product,
	token,
	setDisable,
	setIsRemoving,
	setIsLoading,
}) => {
	setDisable(true);
	if (setIsRemoving) {
		setIsRemoving(true);
	}
	if (setIsLoading) {
		setIsLoading(true);
	}
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
		if (setIsRemoving) {
			setIsRemoving(false);
		}
		if (setIsLoading) {
			setIsLoading(false);
		}
	} catch (error) {
		console.log(error);
	} finally {
		setDisable(false);
	}
};

export const placeOrder = async ({
	dispatch,
	token,
	orderDetails,
	setOrderStatus,
	setOrderId,
	setIsLoading,
}) => {
	try {
		if (setIsLoading) {
			setIsLoading(true);
		}
		const {
			data: { response },
		} = await axios({
			method: "POST",
			url: `${CAMKART_API}/orders`,
			data: orderDetails,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch({ type: "RESET_CART" });

		callOrders(dispatch, token);
		setOrderId(response);
		setOrderStatus("SUCCESS");
		if (setIsLoading) {
			setIsLoading(false);
		}
	} catch (error) {
		console.log(error);
		setOrderStatus("FAILURE");
		setOrderId("");
	}
};
