import { useState } from "react";
import { useAuth } from "../../../../Context";
import { AddressForm } from "./AddressForm";
import { AddressCard } from "./AddressCard";
import "./address.css";

export const Address = () => {
	const [isEditorOpen, setEditorOpen] = useState(false);
	const {
		state: { addressDetails },
	} = useAuth();
	return (
		<div className="adddress-container">
			<div className="adddress-main">
				<h1>Addresses</h1>
				<ul className="adddress-card-list">
					{addressDetails?.map((address) => (
						<AddressCard key={address._id} address={address} />
					))}
				</ul>
				<button
					onClick={() => {
						setEditorOpen(true);
						document.body.style.overflow = "hidden";
					}}
					className="add-address-cta"
				>
					Add New Address
				</button>

				{isEditorOpen && (
					<AddressForm
						isEditorOpen={isEditorOpen}
						setEditorOpen={setEditorOpen}
					/>
				)}
			</div>
		</div>
	);
};
