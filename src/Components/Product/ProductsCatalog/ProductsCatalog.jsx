import "./styles.css";
import { Filters } from "./Filters";
import { useAppDataContext } from "../../../Context";
import { Link } from "react-router-dom";
import { getSortedData, getFilteredData } from "../../../utils/arrayModifiers";
import { BsFillStarFill } from "react-icons/bs";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const OutofStockButtons = (props) => {
	const inStock = props.inStock;
	return inStock ? (
		<div className="cta-button-container">
			<Link to="/" className="cta-button">
				Add to Cart
			</Link>

			<Link to="/" className="cta-button">
				<HiHeart className="cta-button-icon-filled" />
				<HiOutlineHeart className="cta-button-icon-outline" />
			</Link>
		</div>
	) : (
		<div className="cta-button-container-out-of-stock">
			<div className="cta-button-out-of-stock">Out of Stock</div>
		</div>
	);
};

export const ProductsCatalog = () => {
	const { state } = useAppDataContext();
	console.log(state);
	const sortedData = getSortedData(state, state.products);
	const filteredData = getFilteredData(state, sortedData);
	// filteredData.length !== 0 &&
	return (
		<div className="catalog-container">
			<div className="catalog-main">
				<Filters />
				<div className="products-container">
					{filteredData.length !== 0 &&
						filteredData.map((product, id) => {
							return (
								<div key={id} className="products-card">
									<Link to="/" className="products-img-container">
										<img
											src={product.img}
											alt="product-img"
											className="products-img"
										/>
									</Link>

									<div className="products-text">
										<div className="products-title-info">
											<p className="products-brand ">{product.brand}</p>
											<Link to="/login" className="products-name">
												<p>{product.name}</p>
											</Link>

											<div className="products-rating">
												<div className="products-stars-container">
													{Array.from({ length: product.stars }).map(
														(star, id) => (
															<BsFillStarFill
																key={id}
																className="products-stars"
															/>
														)
													)}
												</div>
												<p className="products-stars-text ">{product.stars}</p>
												<p className="products-reviews ">({product.reviews})</p>
											</div>
										</div>
										<div className="product-price-container">
											<p className="products-price">₹ {product.price}</p>
											<p className="products-old-price">₹ {product.oldPrice}</p>
											<p className="products-offer">({product.offer}%)</p>
										</div>

										<OutofStockButtons inStock={product.inStock} />
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
