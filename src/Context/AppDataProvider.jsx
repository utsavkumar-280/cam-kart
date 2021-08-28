import { createContext, useContext, useReducer } from "react";
import { AppDataReducer } from "../Reducer";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
	const initialState = {
		products: [],
		cart: {
			products: [],
			address: null,
		},
		wishlist: [],
		orders: [],
		filters: {
			categoryFilter: [],
			brandFilter: [],
			includeOutOfStock: true,
		},
		sortBy: "",
	};

	const [state, dispatch] = useReducer(AppDataReducer, initialState);

	return (
		<AppDataContext.Provider value={{ state, dispatch }}>
			{children}
		</AppDataContext.Provider>
	);
};

export const useAppDataContext = () => useContext(AppDataContext);
