import { Link } from "react-router-dom";

export const OrderConfirmation = ({ orderId }) => {
	return (
		<div className="confirm-container">
			<div className="confirm-content">
				<h3>
					Order id: <span>{orderId}</span>
				</h3>
				<h2>Successfully placed the order</h2>
				<p>Thank you for shopping with us.</p>
				<Link to="/profile/orders">Check you orders</Link>
			</div>
		</div>
	);
};
