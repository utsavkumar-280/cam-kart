import { useState, useEffect } from "react";
import { CircleSpinner } from "react-spinners-kit";

import { useAppDataContext, useAuth } from "../../Context";
import { useOrderDetails } from "./useOrderDetails";
import { useSelectedAddress } from "./useSelectedAddress";
import { placeOrder } from "../../utils";

export const CartReceipt = ({ setOrderId, setOrderStatus }) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		state: { cart },
		dispatch,
	} = useAppDataContext();
	const { totalAmount, totalQty } = useOrderDetails();
	const { selectedAddress } = useSelectedAddress();

	const {
		state: { token },
	} = useAuth();

	const placedOrder = {
		products: cart?.products?.map(({ product, quantity }) => ({
			product: product?._id,
			quantity,
		})),
		payment: { totalAmount },
		address: selectedAddress?._id,
	};

	useEffect(() => {
		return () => {
			setIsLoading(false);
		};
	}, []);

	return (
		<section className="order-summary-content">
			<h4>Order Summary</h4>
			<section className="order-summary">
				<p>Cart: {totalQty} items</p>
				<h3>
					Total Amount: <span>₹ {totalAmount}</span>
				</h3>
			</section>
			<section className="place-order-cta">
				<button
					onClick={() =>
						placeOrder({
							dispatch,
							token,
							orderDetails: placedOrder,
							setOrderId,
							setOrderStatus,
							setIsLoading,
						})
					}
					disabled={selectedAddress ? false : true}
				>
					{" "}
					{isLoading ? (
						<>
							<p style={{ paddingRight: "1rem" }}>Placing Order</p>
							<CircleSpinner size={20} loading />
						</>
					) : (
						"Place Order"
					)}
				</button>
			</section>
		</section>
	);
};
