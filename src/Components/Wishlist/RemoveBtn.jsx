import "./wishlist.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useAppDataContext } from "./../../Context";
import { addToWishlist } from "./../../utils";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

export const RemoveBtn = ({ product, isDisable, setDisable }) => {
	const { dispatch } = useAppDataContext();
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
			<AiFillDelete className="cta-button-icon-filled" />
			<AiOutlineDelete className="cta-button-icon-outline" />
		</button>
	);
};
