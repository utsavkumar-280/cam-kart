import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-main">
				<div className="footer-right">
					<Link to="/" className="footer-logo">
						CamKart
					</Link>
					<div className="connectMe">
						<div className="footer-name-padding">BY</div>
						<a
							href="https://utsav-kumar.netlify.app/"
							className=" footer-name-padding"
						>
							@UTSAV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
