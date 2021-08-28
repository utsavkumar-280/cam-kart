import "./profile.css";
import { NavLink, Outlet } from "react-router-dom";

export const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-main">
				<div className="profile-links-container">
					<NavLink
						to="/profile"
						end
						className="profile-links-cta"
						activeClassName="profile-links-active"
					>
						Profile
					</NavLink>
					<NavLink
						to="/profile/addresses"
						end
						className="profile-links-cta"
						activeClassName="profile-links-active"
					>
						Addresses
					</NavLink>
					<NavLink
						to="/profile/orders"
						end
						className="profile-links-cta"
						activeClassName="profile-links-active"
					>
						Orders
					</NavLink>
				</div>
				<div className="profile-routes">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
