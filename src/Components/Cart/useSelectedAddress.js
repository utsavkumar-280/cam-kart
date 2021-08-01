import { useAuth, useAppDataContext } from "../../Context";

export const useSelectedAddress = () => {
	const {
		state: { addressDetails },
	} = useAuth();
	const {
		state: {
			cart: { address },
		},
	} = useAppDataContext();

	const selectedAddress = addressDetails?.find(
		(thisAddress) => thisAddress._id === address
	);
	return { selectedAddress };
};
