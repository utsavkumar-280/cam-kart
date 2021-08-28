import "./wishlist.css";
import { useState } from "react";
import { CartButton } from "../Product/ProductsCatalog/CartButton";
import { RemoveBtn } from "./RemoveBtn";

export const WishlistCard = ({ product }) => {
	const [isDisable, setDisable] = useState(false);
	return (
		<div className="products-card">
			<div className="products-img-container">
				<img src={product.img} alt="product-img" className="products-img" />
			</div>

			<div className="products-text">
				<div className="products-title-info">
					<p className="products-brand ">{product.brand}</p>
					<div className="products-name">
						<p>{product.name}</p>
					</div>
				</div>
				<div className="product-price-container">
					<p className="products-price">₹ {product.price}</p>
					<p className="products-old-price">₹ {product.oldPrice}</p>
					<p className="products-offer">({product.offer}%)</p>
				</div>

				<div className="cta-button-container">
					<CartButton
						product={product}
						isDisable={isDisable}
						setDisable={setDisable}
					/>
					<RemoveBtn
						product={product}
						isDisable={isDisable}
						setDisable={setDisable}
					/>
				</div>
			</div>
		</div>
	);
};
