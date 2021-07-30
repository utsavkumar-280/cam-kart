import "./profile.css";
import { useAuth } from "../../../Context";
import { FaUserCircle } from "react-icons/fa";

export const ProfileInfo = () => {
	const {
		state: {
			userDetails: { userFirstName, userLastName, userEmail },
		},

		logout,
	} = useAuth();

	return (
		<div className="profile-card">
			<FaUserCircle className="profile-logo" />
			<div>
				<p className="profile-text">
					Firstname: <span className="primary-color">{userFirstName}</span>
				</p>
				<p className="profile-text">
					Lastname: <span className="primary-color">{userLastName}</span>
				</p>
				<p className="profile-text">
					Email: <span className="primary-color">{userEmail}</span>
				</p>
			</div>

			<button onClick={() => logout()} className="form-submit-cta">
				Logout
			</button>
		</div>
	);
};
