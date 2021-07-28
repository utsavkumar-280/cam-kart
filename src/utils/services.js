import axios from "axios";

export const callProducts = async (url) => {
	const response = await axios.get(url);

	if (response.status === 200) {
		return response;
	} else {
		throw new Error("Failed to fetch products");
	}
};
