import "./filters.css";
import { categories, brands } from "../../../utils/data";
import { useAppDataContext } from "../../../Context";

export const Filters = () => {
	const { state, dispatch } = useAppDataContext();
	return (
		<div className="filter-container">
			<div className="filter-main">
				<div className="filter-head-container">
					<p className="filter-head">Filters</p>
					<button
						className="cta-clear"
						onClick={() =>
							dispatch({
								type: "CLEAR_ALL_FILTERS",
							})
						}
					>
						Clear All
					</button>
				</div>
				<div className="filter-body">
					<div className="filter-sortBy">
						<p className="filter-name">Sort By</p>
						<ul>
							<li className="filter-list">
								<label className="label-name">
									<input
										className="filter-check"
										type="radio"
										name="sortBy"
										value="PRICE_HIGH_TO_LOW"
										checked={"PRICE_HIGH_TO_LOW" === state.sortBy}
										onChange={(e) =>
											dispatch({ type: "SORT_BY", payload: e.target.value })
										}
									/>
									Price High to Low
								</label>
							</li>
							<li className="filter-list">
								<label className="label-name">
									<input
										className="filter-check"
										type="radio"
										name="sortBy"
										value="PRICE_LOW_TO_HIGH"
										checked={"PRICE_LOW_TO_HIGH" === state.sortBy}
										onChange={(e) =>
											dispatch({ type: "SORT_BY", payload: e.target.value })
										}
									/>
									Price Low to High
								</label>
							</li>
						</ul>
					</div>
					<div className="filter-cat">
						<p className="filter-name">Categories</p>
						<ul>
							{categories.map((category, id) => {
								return (
									<li key={id} className="filter-list">
										<label className="label-name">
											<input
												className="filter-check"
												type="checkbox"
												checked={state.filters.categoryFilter.includes(
													category
												)}
												onChange={() =>
													dispatch({
														type: "FILTER_BY_CATEGORIES",
														payload: category,
													})
												}
											/>
											{category}
										</label>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="filter-brand">
						<p className="filter-name">Brands</p>
						<ul>
							{brands.map((brand, id) => {
								return (
									<li key={id} className="filter-list">
										<label className="label-name">
											<input
												className="filter-check"
												type="checkbox"
												checked={state.filters.brandFilter.includes(brand)}
												onChange={() =>
													dispatch({
														type: "FILTER_BY_BRANDS",
														payload: brand,
													})
												}
											/>
											{brand}
										</label>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="filter-out-of-stock">
						<div className="filter-name">Others</div>
						<ul>
							<li className="filter-list">
								<label className="label-name">
									<input
										className="filter-check"
										type="checkbox"
										checked={state.filters.includeOutOfStock}
										onChange={() =>
											dispatch({
												type: "INCLUDE_OUT_OF_STOCK",
												payload: !state.filters.includeOutOfStock,
											})
										}
									/>
									Include out of stock
								</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
