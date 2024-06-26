import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ open, onClose, onConfirm }) => {
	const [tableName, setTableName] = useState("");

	const handleChange = (e) => {
		setTableName(e.target.value);
	};

	const handleSubmit = () => {
		onConfirm(tableName);
	};

	if (!open) return null;

	return (
		<div className="modal-overlay">
			<div className="modal">
				<button className="close-button" onClick={onClose}>
					×
				</button>
				<h2>Nadaj nazwę stolikowi</h2>
				<input
					type="text"
					value={tableName}
					onChange={handleChange}
					placeholder="Nazwa stolika"
				/>
				<div className="modal-buttons">
					<button onClick={handleSubmit}>Zatwierdź</button>
					<button onClick={onClose}>Anuluj</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
