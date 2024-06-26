import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./ExtrasModal.css";

const ExtrasModal = ({ extras, onClose, onAddExtra, onHalfHalfClick }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredExtras, setFilteredExtras] = useState(extras);

	useEffect(() => {
		if (searchTerm.trim() === "") {
			setFilteredExtras(extras);
		} else {
			setFilteredExtras(
				extras.filter((extra) =>
					extra.name.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		}
	}, [searchTerm, extras]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleExtraSelect = (extra) => {
		onAddExtra(extra);
	};

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("extras-modal-overlay")) {
			onClose();
		}
	};

	return (
		<div className="extras-modal-overlay" onClick={handleOverlayClick}>
			<div className="extras-modal">
				<button className="half-half-button" onClick={onHalfHalfClick}>
					<FontAwesomeIcon icon={faCircle} /> Pizza pół na pół
				</button>
				<h2>Wybierz Dodatki</h2>
				<input
					type="text"
					placeholder="Szukaj dodatków..."
					value={searchTerm}
					onChange={handleSearchChange}
				/>

				<ul>
					{filteredExtras.map((extra) => (
						<li key={extra.id} onClick={() => handleExtraSelect(extra)}>
							{extra.name} - {extra.price} zł
						</li>
					))}
				</ul>
				<button onClick={onClose}>Zamknij</button>
			</div>
		</div>
	);
};

export default ExtrasModal;
