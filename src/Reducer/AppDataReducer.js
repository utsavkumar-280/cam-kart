export const AppDataReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_PRODUCTS":
			return { ...state, products: payload };

		case "SET_CART":
			return { ...state, productsInCart: payload };

		case "SET_WISHLIST":
			return { ...state, productsInWishlist: payload };

		case "SET_PRICE_HIGH_TO_LOW":
			return { ...state, sortBy: "SET_PRICE_HIGH_TO_LOW" };

		case "SET_PRICE_LOW_TO_HIGH":
			return { ...state, sortBy: "SET_PRICE_LOW_TO_HIGH" };

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
					includeOutOfStock: false,
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
