import { useAppDataContext } from "../../../Context";

export const Order = () => {
	const {
		state: { orders },
	} = useAppDataContext();
	return (
		<div className="orders-page-container">
			<div className="orders-page-content">
				<h1>Orders</h1>
				{orders?.length === 0 ? (
					<div>No orders yet</div>
				) : (
					orders?.map((order) => (
						<div key={order._id}>
							<div>Order id:{order._id} </div>
						</div>
					))
				)}
			</div>
		</div>
	);
};
