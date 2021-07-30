import "./styles.css";
import { LikeButton } from "./LikeButton";
import { CartButton } from "./CartButton";

export const ProductButtons = ({ inStock, product, isDisable, setDisable }) => {
	return inStock ? (
		<div className="cta-button-container">
			<CartButton
				product={product}
				isDisable={isDisable}
				setDisable={setDisable}
			/>
			<LikeButton
				product={product}
				isDisable={isDisable}
				setDisable={setDisable}
			/>
		</div>
	) : (
		<div className="cta-button-container-out-of-stock">
			<div className="cta-button-out-of-stock">Out of Stock</div>
		</div>
	);
};
