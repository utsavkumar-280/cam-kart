import "./wishlist.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { CircleSpinner } from "react-spinners-kit";

import { useAuth, useAppDataContext } from "./../../Context";
import { addToWishlist } from "./../../utils";

export const RemoveBtn = ({ product, isDisable, setDisable }) => {
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAppDataContext();
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
			{isLoading ? (
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
	);
};
