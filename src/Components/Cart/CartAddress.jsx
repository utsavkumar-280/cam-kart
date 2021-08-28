import { useState } from "react";
import { AddressForm } from "../Auth/Profile/Address/AddressForm";
import { CartAddressModal } from "./CartAddressModal";
import { useSelectedAddress } from "./useSelectedAddress";

export const CartAddress = () => {
	const [isEditorOpen, setEditorOpen] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);
	const { selectedAddress } = useSelectedAddress();
	return (
		<>
			<section className="address-select">
				{selectedAddress ? (
					<>
						<div>
							<h4>
								Deliver to:
								<span> {` ${selectedAddress.fullName}`}</span>
							</h4>
							<p>{`${selectedAddress.buildingName}, ${selectedAddress.city}... `}</p>
						</div>
					</>
				) : (
					<>
						<div>
							<h4>Deliver to:</h4>
							<p>Select address</p>
						</div>
					</>
				)}
				<button className="address-cta" onClick={() => setModalOpen(true)}>
					Change
				</button>
			</section>

			{isModalOpen && (
				<CartAddressModal
					setModalOpen={setModalOpen}
					setEditorOpen={setEditorOpen}
				/>
			)}
			{isEditorOpen && (
				<AddressForm
					isEditorOpen={isEditorOpen}
					setEditorOpen={setEditorOpen}
				/>
			)}
		</>
	);
};
