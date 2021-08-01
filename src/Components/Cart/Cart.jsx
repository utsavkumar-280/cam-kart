import "./cart.css";
import { CartCard } from "./CartCard";

export const Cart = () => {
	return (
		<div className="cart-container">
			<div className="cart-main">
				<h1>Cart</h1>
				<div className="cart-content">
					<section className="order-info">
						<section className="address-select">
							<div>
								<h4>Deliver to:</h4>
								<p>Select address</p>
							</div>
							<button className="address-cta">Change</button>
						</section>
						<section className="cart-list">
							<CartCard />
							<CartCard />
							<CartCard />
							<CartCard />
						</section>
					</section>
					<section className="order-summary-container">
						<section className="order-summary-content">
							<section className="order-summary">Order summary</section>
							<section className="place-order-cta">
								<button>Place Order</button>
							</section>
						</section>
					</section>
				</div>
			</div>
		</div>
	);
};
