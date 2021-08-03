import { useAppDataContext, useAuth } from "../../Context";
import { useOrderDetails } from "./useOrderDetails";
import { useSelectedAddress } from "./useSelectedAddress";
import { placeOrder } from "../../utils";

export const CartReceipt = ({ setOrderId, setOrderStatus }) => {
	const {
		state: { cart },
		dispatch,
	} = useAppDataContext();
	const { totalAmount, totalQty } = useOrderDetails();
	const { selectedAddress } = useSelectedAddress();

	const {
		state: { userDetails, token },
	} = useAuth();

	const placedOrder = {
		products: cart?.products?.map(({ product, quantity }) => ({
			product: product._id,
			quantity,
		})),
		payment: { totalAmount },
		address: selectedAddress._id,
	};

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
						})
					}
					disabled={selectedAddress ? false : true}
				>
					Place Order
				</button>
			</section>
		</section>
	);
};
