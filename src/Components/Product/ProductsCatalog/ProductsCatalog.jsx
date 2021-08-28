import "./styles.css";

import { ProductCard } from "./ProductCard";
import { Filters } from "./Filters";
import { useAppDataContext } from "../../../Context";
import { getSortedData, getFilteredData } from "../../../utils/arrayModifiers";

export const ProductsCatalog = () => {
	const { state } = useAppDataContext();
	const sortedData = getSortedData(state, state.products);
	const filteredData = getFilteredData(state, sortedData);

	return (
		<div className="catalog-container">
			<div className="catalog-main">
				<Filters />
				<div className="products-container">
					{filteredData.length !== 0 &&
						filteredData.map((product, id) => {
							return <ProductCard key={id} product={product} />;
						})}
				</div>
			</div>
		</div>
	);
};
