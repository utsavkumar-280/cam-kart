import "./cart.css";
import { useState } from "react";
import { CartCard } from "./CartCard";
import { CartAddress } from "./CartAddress";
import { CartReceipt } from "./CartReceipt";
import { useAppDataContext } from "../../Context";
import { OrderConfirmation } from "./OrderConfirmation";

export const Cart = () => {
	const { state } = useAppDataContext();
	const [orderStatus, setOrderStatus] = useState("");
	const [orderId, setOrderId] = useState("");

	return (
		<div className="cart-container">
			<div className="cart-main">
				{orderStatus === "SUCCESS" ? (
					<OrderConfirmation orderId={orderId} />
				) : (
					<>
						<h1>Cart</h1>
						{state?.cart?.products?.length === 0 ? (
							<p>Cart is empty</p>
						) : (
							<div className="cart-content">
								<section className="order-info">
									<CartAddress />
									<section className="cart-list">
										{state?.cart?.products?.map(({ product, quantity }) => (
											<CartCard
												key={product._id}
												product={product}
												quantity={quantity}
											/>
										))}
									</section>
								</section>
								<section className="order-summary-container">
									<CartReceipt
										setOrderId={setOrderId}
										setOrderStatus={setOrderStatus}
									/>
								</section>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};
