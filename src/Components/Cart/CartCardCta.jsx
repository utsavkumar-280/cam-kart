import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";
import { useAppDataContext, useAuth } from "../../Context";
import {
	incProductInCart,
	decProductInCart,
	removeProductInCart,
	addToWishlist,
	isPresentInArray,
} from "../../utils";

export const CartCardCta = ({ product, quantity, isDisable, setDisable }) => {
	const { state, dispatch } = useAppDataContext();
	const {
		state: { token },
	} = useAuth();

	return (
		<>
			<div className="cart-card-cta-container">
				<div className="cart-modify-cta">
					<button
						disabled={isDisable}
						onClick={() =>
							quantity !== 1
								? decProductInCart({
										dispatch,
										product,
										quantity,
										setDisable,
										token,
								  })
								: removeProductInCart({
										dispatch,
										product,
										setDisable,
										token,
								  })
						}
					>
						{quantity !== 1 ? <FiMinus /> : <FiTrash />}
					</button>
					<div>{quantity}</div>
					<button
						disabled={isDisable}
						onClick={() =>
							incProductInCart({
								dispatch,
								product,
								quantity,
								setDisable,
								token,
							})
						}
					>
						<FiPlus />
					</button>
				</div>

				<button
					className="move-wishlist-cta"
					disabled={isDisable}
					onClick={() => {
						if (!isPresentInArray(state.wishlist.products, product._id)) {
							addToWishlist({
								dispatch,
								token,
								product,
								setDisable,
							});
						}
						removeProductInCart({
							dispatch,
							product,
							setDisable,
							token,
						});
					}}
				>
					Move to Wishlist
				</button>
			</div>
		</>
	);
};
