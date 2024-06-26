import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./PaymentManager.css";

const PaymentManager = ({ selectedItems, adjustedTotalAmount, onClose }) => {
	const [amountGiven, setAmountGiven] = useState("");
	const [changeAmount, setChangeAmount] = useState(0);
	const [selectedPaymentType, setSelectedPaymentType] = useState(null);
	const [modalVisible, setModalVisible] = useState(true);

	useEffect(() => {
		const amountGivenNumber = parseFloat(amountGiven);
		if (!isNaN(amountGivenNumber)) {
			const change = amountGivenNumber - adjustedTotalAmount;
			setChangeAmount(change > 0 ? change : 0);
		} else {
			setChangeAmount(0);
		}
	}, [amountGiven, adjustedTotalAmount]);

	const handleFinalizePayment = () => {
		console.log("Płatność została zakończona");
		setSelectedPaymentType(null);
		onClose();
	};

	const handlePaymentTypeClick = (paymentType) => {
		setSelectedPaymentType(paymentType);
	};

	const handleCancelPayment = () => {
		if (selectedPaymentType === null) {
			setModalVisible(false);
		} else {
			setSelectedPaymentType(null);
		}
	};

	const handleBackToPaymentTypeSelection = () => {
		setSelectedPaymentType(null);
		setModalVisible(true); // Pokazuje ponownie modal
	};

	return modalVisible ? (
		<div className="payment-manager-overlay">
			<div className="payment-manager">
				<div className="payment-header">
					{selectedPaymentType === null ? (
						<>
							<h2>Metoda płatności</h2>
							<button className="close-button" onClick={handleCancelPayment}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</>
					) : (
						<>
							<button
								className="back-button"
								onClick={handleBackToPaymentTypeSelection}>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</>
					)}
				</div>

				{selectedPaymentType === null ? (
					<div className="payment-options">
						<button
							className="button-pay"
							onClick={() => handlePaymentTypeClick("cash")}>
							Gotówka
						</button>
						<button
							className="button-pay"
							onClick={() => handlePaymentTypeClick("card")}>
							Karta
						</button>
					</div>
				) : null}

				{selectedPaymentType === "cash" && (
					<div className="cash-payment">
						<h3>Do zapłaty: {adjustedTotalAmount} zł</h3>
						<input
							type="number"
							value={amountGiven}
							onChange={(e) => setAmountGiven(e.target.value)}
							placeholder="Kwota od klienta"
						/>
						<p>Reszta: {changeAmount.toFixed(2)} zł</p>
						<button className="finalize-button" onClick={handleFinalizePayment}>
							Opłacone
						</button>
					</div>
				)}

				{selectedPaymentType === "card" && (
					<div className="card-payment">
						<h3>Implementacja płatności kartą</h3>
						<button className="finalize-button" onClick={handleFinalizePayment}>
							Opłacone kartą
						</button>
					</div>
				)}
			</div>
		</div>
	) : null;
};

export default PaymentManager;
