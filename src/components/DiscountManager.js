import React, { useState } from "react";

const DiscountManager = ({
	selectedItems,
	totalAmount,
	totalPrice,
	adjustments,
	calculateDiscountedTotal,
	onClose,
}) => {
	const [discount, setDiscount] = useState(0);

	const handleDiscountChange = (e) => {
		setDiscount(parseFloat(e.target.value) || 0);
	};

	const discountedTotal = calculateDiscountedTotal(discount);

	return (
		<div className="discount-manager">
			<h3>Płatność</h3>
			<div className="payment-summary">
				<p>Łączna kwota: {totalPrice.toFixed(2)} zł</p>
				<div className="input-row">
					<label>Zniżka (%)</label>
					<input
						type="number"
						min="0"
						value={discount}
						onChange={handleDiscountChange}
					/>
				</div>
				<p>Wartość po zniżce: {discountedTotal.toFixed(2)} zł</p>
			</div>
			<div className="modal-buttons">
				<button onClick={onClose}>Zamknij</button>
			</div>
		</div>
	);
};

export default DiscountManager;
