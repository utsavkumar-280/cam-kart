import "./home.css";
import { Link } from "react-router-dom";
import { categories, brands } from "../../utils/data";
import { useAppDataContext } from "../../Context";

export const Home = () => {
	const { dispatch } = useAppDataContext();
	return (
		<div className="home-container">
			<section className="hero">
				<div className=" flex-column-center hero-text">
					<div className="hero-head-small margin-5">
						20% OFF PROMOTIONAL SALE
					</div>

					<div className="hero-head-large">Everything you need for a</div>
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
					<Link
						to="/products"
						onClick={() => {
							dispatch({
								type: "CLEAR_ALL_FILTERS",
							});
						}}
					>
						<button className="hero-button margin-5">Browse Products</button>
					</Link>
				</div>
			</section>

			<div className="home-main">
				<section className="category-container">
					<div className="home-head-text">Category</div>
					<div className="cat-main-grid">
						{categories.map((category, idx) => {
							return (
								<div className="cat-card-container" key={idx}>
									<div className="cat-card-head">{category.title} </div>
									<img
										src={category.img}
										alt={`${category.type}-img`}
										className="cat-card-img"
									/>
									<Link
										to="/products"
										onClick={() => {
											dispatch({
												type: "CLEAR_ALL_FILTERS",
											});
											dispatch({
												type: "FILTER_BY_CATEGORIES",
												payload: category.type,
											});
										}}
									>
										<button className="cat-card-button">Shop Now</button>
									</Link>
								</div>
							);
						})}
					</div>
				</section>
				<section className="brand-container">
					<div className="home-head-text">Shop by Brand</div>
					<div className="brand-main-grid">
						{brands
							.filter((brand) => brand.name !== "Digitek")
							.map((brand, no) => {
								return (
									<Link
										key={no}
										to="/products"
										onClick={() => {
											dispatch({
												type: "CLEAR_ALL_FILTERS",
											});
											dispatch({
												type: "FILTER_BY_BRANDS",
												payload: brand.name,
											});
										}}
									>
										<div className="brand-logo">
											<div
												style={{
													backgroundImage: `url(${brand.img})`,
													backgroundPosition: "center",
													backgroundRepeat: "no-repeat",
													backgroundSize: `${
														brand.cover ? "cover" : "contain"
													}`,
													height: "10vh",
												}}
											>
												<div className="hover-effect"></div>
											</div>
										</div>
									</Link>
								);
							})}
					</div>
				</section>
			</div>
		</div>
	);
};
