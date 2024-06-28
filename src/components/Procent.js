import React, { useState } from "react";

const Procent = ({ onClose, onSubmit }) => {
	const [service, setService] = useState("");
	const [discount, setDiscount] = useState("");
	const [addToBill, setAddToBill] = useState("");
	const [subtractFromBill, setSubtractFromBill] = useState("");

	const handleSubmit = () => {
		onSubmit({
			service: parseFloat(service) || 0,
			discount: parseFloat(discount) || 0,
			addToBill: parseFloat(addToBill) || 0,
			subtractFromBill: parseFloat(subtractFromBill) || 0,
		});
		onClose();
	};

	return (
		<div className="procent-modal">
			<h3>Ustawienia Procentowe</h3>
			<div className="input-row">
				<label>Serwis (%)</label>
				<input
					type="number"
					min="0"
					value={service}
					onChange={(e) => setService(e.target.value)}
				/>
			</div>
			<div className="input-row">
				<label>Zniżka (%)</label>
				<input
					type="number"
					min="0"
					value={discount}
					onChange={(e) => setDiscount(e.target.value)}
				/>
			</div>

			<div className="input-row">
				<label>Dodaj do rachunku</label>
				<input
					type="number"
					min="0"
					value={addToBill}
					onChange={(e) => setAddToBill(e.target.value)}
				/>
			</div>
			<div className="input-row">
				<label>Odejmij od rachunku</label>
				<input
					type="number"
					min="0"
					value={subtractFromBill}
					onChange={(e) => setSubtractFromBill(e.target.value)}
				/>
			</div>
			<div className="modal-buttons">
				<button onClick={handleSubmit}>Zatwierdź</button>
				<button onClick={onClose}>Zamknij</button>
			</div>
		</div>
	);
};

export default Procent;
