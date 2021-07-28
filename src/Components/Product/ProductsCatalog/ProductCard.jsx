import "./styles.css";
import { ProductButtons } from "./ProductButtons";
import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";

export const ProductCard = ({ product }) => {
	return (
		<div className="products-card">
			<Link to="/" className="products-img-container">
				<img src={product.img} alt="product-img" className="products-img" />
			</Link>

			<div className="products-text">
				<div className="products-title-info">
					<p className="products-brand ">{product.brand}</p>
					<Link to="/login" className="products-name">
						<p>{product.name}</p>
					</Link>

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

				<ProductButtons inStock={product.inStock} />
			</div>
		</div>
	);
};
