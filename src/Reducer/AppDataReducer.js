export const AppDataReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_PRODUCTS":
			return { ...state, products: payload };

		case "SET_WISHLIST":
			return { ...state, wishlist: payload };

		case "SET_CART":
			return { ...state, cart: payload };

		case "SET_ORDERS":
			return { ...state, orders: payload };

		case "RESET_CART":
			return { ...state, cart: { products: [], address: null } };

		case "FILTER_BY_CATEGORIES":
			return state.filters.categoryFilter.includes(payload)
				? {
						...state,
						filters: {
							...state.filters,
							categoryFilter: state.filters.categoryFilter.filter(
								(category) => category !== payload
							),
						},
				  }
				: {
						...state,
						filters: {
							...state.filters,
							categoryFilter: state.filters.categoryFilter.concat(payload),
						},
				  };

		case "FILTER_BY_BRANDS":
			return state.filters.brandFilter.includes(payload)
				? {
						...state,
						filters: {
							...state.filters,
							brandFilter: state.filters.brandFilter.filter(
								(brand) => brand !== payload
							),
						},
				  }
				: {
						...state,
						filters: {
							...state.filters,
							brandFilter: state.filters.brandFilter.concat(payload),
						},
				  };

		case "CLEAR_ALL_FILTERS":
			return {
				...state,
				filters: {
					categoryFilter: [],
					brandFilter: [],
					includeOutOfStock: true,
				},
				sortBy: "",
			};

		case "SORT_BY":
			if (payload === "PRICE_HIGH_TO_LOW") return { ...state, sortBy: payload };
			else if (payload === "PRICE_LOW_TO_HIGH")
				return { ...state, sortBy: payload };
			else return { ...state, sortBy: "" };

		case "INCLUDE_OUT_OF_STOCK":
			return {
				...state,
				filters: { ...state.filters, includeOutOfStock: payload },
			};

		default:
			return state;
	}
};
