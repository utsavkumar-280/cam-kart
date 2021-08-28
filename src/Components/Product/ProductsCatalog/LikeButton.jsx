import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useAppDataContext } from "../../../Context";
import { isPresentInArray, addToWishlist } from "../../../utils";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const LikeButton = ({ product, isDisable, setDisable }) => {
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
					? addToWishlist({
							dispatch,
							token,
							product,
							setDisable,
					  })
					: navigate("/login");
			}}
		>
			{isPresentInArray(state.wishlist.products, product._id) ? (
				<HiHeart className="cta-button-icon-active" />
			) : (
				<>
					<HiHeart className="cta-button-icon-filled" />
					<HiOutlineHeart className="cta-button-icon-outline" />
				</>
			)}
		</button>
	);
};
