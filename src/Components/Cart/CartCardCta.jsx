import { useState, useEffect } from "react";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { CircleSpinner } from "react-spinners-kit";

import { useAppDataContext, useAuth } from "../../Context";
import {
	incProductInCart,
	decProductInCart,
	removeProductInCart,
	addToWishlist,
	isPresentInArray,
} from "../../utils";

export const CartCardCta = ({ product, quantity, isDisable, setDisable }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isIncreasing, setIsIncreasing] = useState(false);
	const [isDecreasing, setIsDecreasing] = useState(false);
	const [isRemoving, setIsRemoving] = useState(false);
	const { state, dispatch } = useAppDataContext();
	const {
		state: { token },
	} = useAuth();

	useEffect(() => {
		return () => {
			setIsLoading(false);
		};
	}, []);

	return (
		<>
			<div className="cart-card-cta-container">
				<div className="cart-modify-cta-container">
					<button
						className="cart-modify-cta"
						disabled={isDisable}
						onClick={() =>
							quantity !== 1
								? decProductInCart({
										dispatch,
										product,
										quantity,
										token,
										setDisable,
										setIsDecreasing,
								  })
								: removeProductInCart({
										dispatch,
										product,
										token,
										setDisable,
										setIsRemoving,
								  })
						}
					>
						{quantity !== 1 ? (
							isDecreasing ? (
								<section className="loaderContainerAlt">
									<CircleSpinner size={17} loading />
								</section>
							) : (
								<FiMinus />
							)
						) : isRemoving ? (
							<section className="loaderContainerAlt">
								<CircleSpinner size={17} loading />
							</section>
						) : (
							<>
								<AiFillDelete className="cta-button-icon-filled" />
								<AiOutlineDelete className="cta-button-icon-outline" />
							</>
						)}
					</button>

					<div className="cart-modify-cta">{quantity}</div>

					<button
						className="cart-modify-cta"
						disabled={isDisable}
						onClick={() =>
							incProductInCart({
								dispatch,
								product,
								quantity,
								token,
								setDisable,
								setIsIncreasing,
							})
						}
					>
						{isIncreasing ? (
							<section className="loaderContainerAlt">
								<CircleSpinner size={17} loading />
							</section>
						) : (
							<FiPlus />
						)}
					</button>
				</div>

				<button
					className="cta-button"
					disabled={isDisable}
					onClick={() => {
						if (!isPresentInArray(state.wishlist.products, product._id)) {
							addToWishlist({
								dispatch,
								token,
								product,
								setDisable,
								setIsLoading,
							});
						}
						removeProductInCart({
							dispatch,
							product,
							token,
							setDisable,
							setIsLoading,
						});
					}}
				>
					{isLoading ? (
						<>
							<div style={{ paddingRight: "1rem" }}>Moving</div>
							<section className="loaderContainer">
								<CircleSpinner size={15} loading />
							</section>
						</>
					) : (
						"Move to Wishlist"
					)}
				</button>
			</div>
		</>
	);
};
