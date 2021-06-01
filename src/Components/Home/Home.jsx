import "./home.css";
import { Link } from "react-router-dom";
import Dslr from "./assets/dslr.png";
import Mirrorless from "./assets/mirrorless.png";
import Action from "./assets/action.png";
import Instant from "./assets/instant.png";
import Lens from "./assets/lens.png";
import Gimbal from "./assets/gimbal.png";
import Tripod from "./assets/tripod.png";
import Accessories from "./assets/accessories.png";
import { useAppDataContext } from "../../Context";

export const Home = () => {
	const { dispatch } = useAppDataContext();
	return (
		<div className="home-container">
			<section className="hero ">
				<div className=" flex-column-center hero-text">
					<div className="hero-head-small margin-5">
						20% OFF PROMOTIONAL SALE
					</div>
					<div className="hero-head-large">Whatever you need for a</div>
					<div className="hero-head-large">great picture.</div>
					<div className="hero-head-medium margin-5">
						<p>
							Choose from our wide range of products
							<br />
							including DSLRs, Mirrorless cameras,
							<br />
							Action cameras,Video cameras,
							<br />
							and many more.
							<br />
						</p>
					</div>
					<Link to="/products">
						<button className="hero-button margin-5">Browse Products</button>
					</Link>
				</div>
			</section>

			<div className="home-main">
				<section className="category-container">
					<div className="home-head-text">Category</div>
					<div className="cat-main-grid">
						<div className="cat-card-container">
							<div className="cat-card-head">DSLR CAMERAS</div>
							<img src={Dslr} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({ type: "FILTER_BY_CATEGORIES", payload: "DSLR" });
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">MIRRORLESS CAMERAS</div>
							<img src={Mirrorless} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Mirrorless",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">ACTION CAMERAS</div>
							<img src={Action} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Action",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">INSTANT CAMERAS</div>
							<img src={Instant} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Instant",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">LENS</div>
							<img src={Lens} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Lens",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">GIMBALS</div>
							<img src={Gimbal} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Gimbal",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">TRIPODS</div>
							<img src={Tripod} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Tripod",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
						<div className="cat-card-container">
							<div className="cat-card-head">ACCESSORIES</div>
							<img src={Accessories} alt="dslr-img" className="cat-card-img" />
							<Link
								to="/products"
								onClick={() => {
									dispatch({
										type: "CLEAR_ALL_FILTERS",
									});
									dispatch({
										type: "FILTER_BY_CATEGORIES",
										payload: "Accessories",
									});
								}}
							>
								<button className="cat-card-button">Shop Now</button>
							</Link>
						</div>
					</div>
				</section>
				<section className="brand-container">
					<div className="home-head-text">Shop by Brand</div>
					<div className="brand-main-grid">
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Sony",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand-sony brand"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Canon",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-canon"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Nikon",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-nikon"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Panasonic",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-panasonic"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Fujifilm",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-fujifilm"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Sigma",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-sigma"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "Dji",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-dji"></div>
							</div>
						</Link>
						<Link
							to="/products"
							onClick={() => {
								dispatch({
									type: "CLEAR_ALL_FILTERS",
								});
								dispatch({
									type: "FILTER_BY_BRANDS",
									payload: "GoPro",
								});
							}}
						>
							<div className="brand-logo">
								<div className=" brand brand-gopro"></div>
							</div>
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
};
