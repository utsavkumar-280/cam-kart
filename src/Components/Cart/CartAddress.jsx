import { useState } from "react";
import { AddressForm } from "../Auth/Profile/Address/AddressForm";
import { CartAddressModal } from "./CartAddressModal";

export const CartAddress = () => {
	const [isEditorOpen, setEditorOpen] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);
	return (
		<>
			<section className="address-select">
				<div>
					<h4>Deliver to:</h4>
					<p>Select address</p>
				</div>
				<button className="address-cta" onClick={() => setModalOpen(true)}>
					Change
				</button>
			</section>

			{isModalOpen && <CartAddressModal setModalOpen={setModalOpen} />}
			{isEditorOpen && (
				<AddressForm
					isEditorOpen={isEditorOpen}
					setEditorOpen={setEditorOpen}
				/>
			)}
		</>
	);
};
