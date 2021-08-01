import { useState } from "react";
import { CartCardCta } from "./CartCardCta";

export const CartCard = ({ product, quantity }) => {
	const [isDisable, setDisable] = useState(false);
	return (
		<section className="cart-card">
			<img src={product.img} alt="product-pic" />
			<div className="cart-card-info">
				<div className="cart-card-text">
					<h2>{product.name}</h2>
					<div className="cart-card-price">
						<p>₹ {product.price * quantity}</p>
						<p>₹ {product.oldPrice * quantity}</p>
						<p>({product.offer}%)</p>
					</div>
				</div>
				<CartCardCta
					product={product}
					quantity={quantity}
					isDisable={isDisable}
					setDisable={setDisable}
				/>
			</div>
		</section>
	);
};
