import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleSpinner } from "react-spinners-kit";

import { useAuth, useAppDataContext } from "../../../Context";
import { isPresentInArray, addToCart } from "../../../utils";

export const CartButton = ({ product, isDisable, setDisable }) => {
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
			className="cta-button"
			disabled={isDisable}
			onClick={() => {
				token
					? isPresentInArray(state.cart.products, product._id)
						? navigate("/cart")
						: addToCart({ dispatch, product, setDisable, setIsLoading, token })
					: navigate("/login");
			}}
		>
			{isPresentInArray(state.cart.products, product._id) ? (
				"Go to Cart"
			) : isLoading ? (
				<>
					<div style={{ paddingRight: "1rem" }}>Adding</div>
					<section className="loaderContainer">
						<CircleSpinner size={15} loading />
					</section>
				</>
			) : (
				"Add to Cart"
			)}
		</button>
	);
};
