import axios from "axios";
import { CAMKART_API } from "../../utils";
import { CgClose } from "react-icons/cg";
import { useAppDataContext, useAuth } from "../../Context";
import { useSelectedAddress } from "./useSelectedAddress";
import { AddressCard } from "../Auth/Profile/Address/AddressCard";

export const CartAddressModal = ({ setModalOpen, setEditorOpen }) => {
	const { dispatch } = useAppDataContext();
	const {
		state: { token, addressDetails },
	} = useAuth();

	const { selectedAddress } = useSelectedAddress();

	const AddressSubmit = async (addressId) => {
		try {
			const {
				data: { response },
				status,
			} = await axios({
				method: "POST",
				url: `${CAMKART_API}/cart/address`,
				data: { _id: addressId },
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (status === 200) {
				dispatch({ type: "SET_CART", payload: response });
				setModalOpen(false);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="cart-modal-container">
			<div className="cart-modal-content">
				<button
					className="cart-modal-close-cta"
					onClick={() => setModalOpen(false)}
				>
					<CgClose />
				</button>
				<ul className="adddress-card-list">
					{addressDetails?.map((address) => (
						<div key={address._id} className="cart-address-box">
							<input
								className="address-input"
								type="radio"
								name="address"
								checked={address._id === selectedAddress?._id}
								onChange={() => AddressSubmit(address._id)}
							/>
							<div>
								<AddressCard address={address} />
							</div>
						</div>
					))}
					<button
						onClick={() => {
							setEditorOpen(true);
							document.body.style.overflow = "hidden";
						}}
						className="add-address-cta"
					>
						Add New Address
					</button>
				</ul>
			</div>
		</div>
	);
};
