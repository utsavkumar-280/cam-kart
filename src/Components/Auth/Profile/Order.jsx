import { useAppDataContext } from "../../../Context";
import "./order.css";

export const Order = () => {
	const {
		state: { orders },
	} = useAppDataContext();

	console.log({ orders });
	return (
		<div className="orders-page-container">
			<div className="orders-page-content">
				<h1>Orders</h1>
				{orders?.length === 0 ? (
					<div>No orders yet</div>
				) : (
					orders?.map((order) => (
						<div key={order._id} className="order-container">
							<section>
								<h1>Order Confirmed</h1>
								<h2>Order: #{order?._id}</h2>
								<div className="order-card-info">
									<h2>
										<strong>Total</strong>: ₹{order?.payment?.totalAmount}
									</h2>
									<h2>
										<strong>Address</strong>:{" "}
										{`${order?.address?.fullName}, ${order?.address?.buildingName}, ${order?.address?.city}, ${order?.address?.state}-${order?.address?.pincode}`}
									</h2>
									{order?.products.map((prod) => (
										<div className="order-card-product-container">
											<img
												src={prod.product.img}
												alt="prod-img"
												className="order-card-product-img"
											/>
											<div className="order-card-product-info">
												<h2>{prod.product.name}</h2>
												<h3>{prod.product.brand}</h3>
												<p>
													<strong>Qty</strong>:{prod.quantity}
												</p>
											</div>
										</div>
									))}
								</div>
							</section>
						</div>
					))
				)}
			</div>
		</div>
	);
};
