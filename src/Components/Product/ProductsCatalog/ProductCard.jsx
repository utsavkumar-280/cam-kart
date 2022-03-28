import { useState, useEffect } from "react";
import "./styles.css";
import { ProductButtons } from "./ProductButtons";
import { BsFillStarFill } from "react-icons/bs";

export const ProductCard = ({ product }) => {
	const [isDisable, setDisable] = useState(false);

	useEffect(() => {
		return () => {
			setDisable(false);
		};
	}, []);
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

					<div className="products-rating">
						<div className="products-stars-container">
							{Array.from({ length: product.stars }).map((star, id) => (
								<BsFillStarFill key={id} className="products-stars" />
							))}
						</div>
						<p className="products-stars-text ">{product.stars}</p>
						<p className="products-reviews ">({product.reviews})</p>
					</div>
				</div>
				<div className="product-price-container">
					<p className="products-price">₹ {product.price}</p>
					<p className="products-old-price">₹ {product.oldPrice}</p>
					<p className="products-offer">({product.offer}%)</p>
				</div>

				<ProductButtons
					inStock={product.inStock}
					product={product}
					isDisable={isDisable}
					setDisable={setDisable}
				/>
			</div>
		</div>
	);
};
