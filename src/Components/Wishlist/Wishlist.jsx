import "./wishlist.css";

import { useAppDataContext } from "../../Context";
import { WishlistCard } from "./WishlistCard";

export const Wishlist = () => {
	const { state } = useAppDataContext();
	return (
		<div className="wish-container">
			<div className="wish-main">
				<h1>WishList</h1>
				{state?.wishlist?.products?.length === 0 && (
					<h2>The Wishlist is empty</h2>
				)}
				<div className="wishlist-container">
					{state?.wishlist?.products?.map(({ product }, id) => {
						return <WishlistCard key={id} product={product} />;
					})}
				</div>
			</div>
		</div>
	);
};
