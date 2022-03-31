import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { CircleSpinner } from "react-spinners-kit";

import { useAuth, useAppDataContext } from "../../../Context";
import { isPresentInArray, addToWishlist } from "../../../utils";

export const LikeButton = ({ product, isDisable, setDisable }) => {
	const [isLoading, setIsLoading] = useState(false);
	const { state, dispatch } = useAppDataContext();
	const {
		state: { token },
	} = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		return () => {
			setIsLoading(false);
		};
	}, []);
	return (
		<button
			className="cta-button-alt"
			disabled={isDisable}
			onClick={() => {
				token
					? addToWishlist({
							dispatch,
							token,
							product,
							setDisable,
							setIsLoading,
					  })
					: navigate("/login");
			}}
		>
			{isPresentInArray(state.wishlist.products, product._id) ? (
				isLoading ? (
					<section className="loaderContainerAlt">
						<CircleSpinner size={17} loading />
					</section>
				) : (
					<HiHeart className="cta-button-icon-active" />
				)
			) : isLoading ? (
				<section className="loaderContainerAlt">
					<CircleSpinner size={17} loading />
				</section>
			) : (
				<>
					<HiHeart className="cta-button-icon-filled" />
					<HiOutlineHeart className="cta-button-icon-outline" />
				</>
			)}
		</button>
	);
};
