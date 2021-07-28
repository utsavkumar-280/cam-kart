import "./styles.css";
import { Link } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const ProductButtons = ({ inStock }) => {
	return inStock ? (
		<div className="cta-button-container">
			<Link to="/" className="cta-button">
				Add to Cart
			</Link>

			<Link to="/" className="cta-button">
				<HiHeart className="cta-button-icon-filled" />
				<HiOutlineHeart className="cta-button-icon-outline" />
			</Link>
		</div>
	) : (
		<div className="cta-button-container-out-of-stock">
			<div className="cta-button-out-of-stock">Out of Stock</div>
		</div>
	);
};
