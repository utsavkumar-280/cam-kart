import { removeAddress } from "../../../../utils";
import { useAuth } from "../../../../Context";
import { AddressForm } from "./AddressForm";

export const AddressCard = ({ address }) => {
	const [isEditable, setEditable] = useState(false);
	const [error, setError] = useState("");
	const {
		state: { token },
		dispatch,
	} = useAuth();
	return (
		<div className="addressCard-container">
			<div className="addressCard-content">
				<div className="addressCard-info">
					<h1>{address.fullName}</h1>
					<p>{address.buildingName}</p>
					<p>
						`${address.city}, ${address.state} - ${address.pincode}`
					</p>
					<p>-{address.phone}</p>
				</div>
				<div className="addressCard-cta-container">
					<button
						className="addressCard-cta"
						onClick={() => setEditable((isEditable) => !isEditable)}
					>
						Edit
					</button>
					<button
						className="addressCard-cta"
						onClick={() =>
							removeAddress({ dispatch, token, address, setError })
						}
					>
						Delete
					</button>
				</div>
				<div className="address-error">{error}</div>
			</div>
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
