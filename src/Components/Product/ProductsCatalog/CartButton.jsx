import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useAppDataContext } from "../../../Context";
import { isPresentInArray, addToCart } from "../../../utils";

export const CartButton = ({ product, isDisable, setDisable }) => {
	const { state, dispatch } = useAppDataContext();
	const {
		state: { token },
	} = useAuth();
	const navigate = useNavigate();

	return (
		<button
			className="cta-button"
			disabled={isDisable}
			onClick={() => {
				token
					? isPresentInArray(state.cart.products, product._id)
						? navigate("/cart")
						: addToCart({ dispatch, product, setDisable, token })
					: navigate("/login");
			}}
		>
			{isPresentInArray(state.cart.products, product._id)
				? "Go to Cart"
				: "Add to Cart"}
		</button>
	);
};
