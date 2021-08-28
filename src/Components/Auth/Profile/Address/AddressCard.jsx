import { useState } from "react";
import { removeAddress } from "../../../../utils";
import { useAuth } from "../../../../Context";
import { AddressForm } from "./AddressForm";
import "./address.css";

export const AddressCard = ({ address }) => {
	const [isEditable, setEditable] = useState(false);
	const [error, setError] = useState("");
	const {
		state: { token },
		dispatch,
	} = useAuth();
	return (
		<div className="addressCard-container">
			<div className="addressCard-info">
				<h2>{address.fullName}</h2>
				<p>{address.buildingName}</p>
				<p>{`${address.city}, ${address.state} - ${address.pincode}`}</p>
				<p>Phone no. - {address.phone}</p>
			</div>
			<div className="addressCard-cta-container">
				<button
					className="addressCard-cta"
					onClick={() => setEditable((isEditable) => !isEditable)}
				>
					Edit
				</button>
				<button
					className="addressCard-cta addressCard-cta-outlined"
					onClick={() => removeAddress({ dispatch, token, address, setError })}
				>
					Delete
				</button>
			</div>
			<div className="address-error">{error}</div>

			{isEditable && (
				<AddressForm
					thisAddress={address}
					isEditable={isEditable}
					setEditable={setEditable}
				/>
			)}
		</div>
	);
};
