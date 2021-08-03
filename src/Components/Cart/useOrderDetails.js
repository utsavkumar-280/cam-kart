import { useAppDataContext } from "../../Context";

const totalCalculator = (array) =>
	array.reduce(
		(acc, { product: { price }, quantity }) => {
			return {
				totalAmount: acc.totalAmount + Number(price) * Number(quantity),
				totalQty: acc.totalQty + Number(quantity),
			};
		},
		{ totalAmount: 0, totalQty: 0 }
	);

export const useOrderDetails = () => {
	const { state } = useAppDataContext();

	const cartDetails = totalCalculator(state?.cart?.products);

	console.log(cartDetails);
	return cartDetails;
};
