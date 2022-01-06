import "./header.css";
import { Link } from "react-router-dom";
import { MdCamera } from "react-icons/md";
import { FiShoppingBag, FiHeart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth, useAppDataContext } from "../../Context";

export const Header = () => {
	const {
		state: { wishlist, cart },
	} = useAppDataContext();

	const {
		state: {
			userDetails: { userFirstName },
		},
	} = useAuth();

	return (
		<div className="head-container">
			<nav className="head-main">
				<div className="left-head flex-align-center">
					<Link to="/" className="head-main-logo">
						<MdCamera className="head-logo" />
						<span className="head-camkart">CamKart</span>
					</Link>
					<Link to="/products" className="heading head-shop">
						SHOP
					</Link>
				</div>

				<div className="right-head flex-align-center">
					<Link to="/profile" className="heading head-login ">
						<FaRegUserCircle className="head-icons head-rev-invisible" />
						<span className="head-hidden">
							{userFirstName ? `Hi, ${userFirstName}` : "LOGIN"}
						</span>
					</Link>
					<Link to="/wishlist" className="heading icon-container">
						<FiHeart className="head-icons" />
						{wishlist?.products?.length > 0 && (
							<div className="icon-counter">{wishlist?.products?.length}</div>
						)}
					</Link>
					<Link to="/cart" className="heading icon-container">
						<FiShoppingBag className="head-icons" />
						{cart?.products?.length > 0 && (
							<div className="icon-counter">{cart?.products?.length}</div>
						)}
					</Link>
				</div>
			</nav>
		</div>
	);
};
