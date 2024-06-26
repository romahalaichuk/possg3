import React, { useState } from "react";

const Procent = ({ onClose, onSubmit }) => {
	const [service, setService] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [addToBill, setAddToBill] = useState(0);
	const [subtractFromBill, setSubtractFromBill] = useState(0);

	const handleSubmit = () => {
		onSubmit({
			service: parseFloat(service),
			discount: parseFloat(discount), // Parsowanie do float
			addToBill: parseFloat(addToBill),
			subtractFromBill: parseFloat(subtractFromBill),
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
					onChange={(e) => setService(parseFloat(e.target.value))}
				/>
			</div>
			<div className="input-row">
				<label>Zniżka (%)</label>
				<input
					type="number"
					min="0"
					value={discount}
					onChange={(e) => setDiscount(parseFloat(e.target.value))}
				/>
			</div>
			<div className="input-row">
				<label>Dodaj do rachunku</label>
				<input
					type="number"
					min="0"
					value={addToBill}
					onChange={(e) => setAddToBill(parseFloat(e.target.value))}
				/>
			</div>
			<div className="input-row">
				<label>Odejmij od rachunku</label>
				<input
					type="number"
					min="0"
					value={subtractFromBill}
					onChange={(e) => setSubtractFromBill(parseFloat(e.target.value))}
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
