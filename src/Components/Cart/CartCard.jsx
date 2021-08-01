import { FiPlus, FiMinus } from "react-icons/fi";

export const CartCard = () => {
	return (
		<section className="cart-card">
			<img
				src="https://i.postimg.cc/gJPZNW57/mini-passport-pic.jpg"
				alt="product-pic"
			/>
			<div className="cart-card-info">
				<div className="cart-card-text">
					<h2>Product Name</h2>
					<p>Price</p>
				</div>
				<div className="cart-card-cta-container">
					<div className="cart-modify-cta">
						<button>
							<FiPlus />
						</button>
						<div>1</div>
						<button>
							<FiMinus />
						</button>
					</div>

					<button className="move-wishlist-cta">Move to Wishlist</button>
				</div>
			</div>
		</section>
	);
};
