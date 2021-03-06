import { useState, useEffect } from "react";
import { CartCardCta } from "./CartCardCta";

export const CartCard = ({ product, quantity }) => {
	const [isDisable, setDisable] = useState(false);

	useEffect(() => {
		return () => {
			setDisable(false);
		};
	}, []);

	return (
		<section className="cart-card">
			<img src={product.img} alt="product-pic" />
			<div className="cart-card-info">
				<div className="cart-card-text">
					<h2>{product.name}</h2>
					<div className="cart-card-price">
						<p>{`₹ ${product.price * quantity} (${product.offer}%off)`}</p>
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
