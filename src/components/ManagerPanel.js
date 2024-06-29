import React from "react";
import "./ManagerPanel.css";
import {
	calculateTotalTablesDuringDay,
	calculateTotalWynos,
	calculateTotalAmount,
} from "./ManagerPanelFunctions";
import jsPDF from "jspdf";

const ManagerPanel = ({ tables = [], wynosTables = [], onClose }) => {
	// Retrieve the list of served tables and served wynos tables from local storage
	const servedTables = JSON.parse(localStorage.getItem("servedTables")) || [];
	const servedWynosTables =
		JSON.parse(localStorage.getItem("servedWynosTables")) || [];

	const totalTablesDuringDay = servedTables.length; // Number of served tables
	const totalWynos = servedWynosTables.length; // Number of served wynos
	const totalAmount = calculateTotalAmount(tables, wynosTables);

	const handleExportToPDF = () => {
		const doc = new jsPDF();
		const currentDate = new Date();
		const dateString = `${currentDate.getDate()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getFullYear()}`;

		doc.text("Panel Managera", 20, 10);
		doc.text(
			`Łączna liczba stolików (w ciągu dnia): ${totalTablesDuringDay}`,
			20,
			20
		);
		doc.text(`Łączna liczba wynosów: ${totalWynos}`, 20, 30);
		doc.text(`Łączna kwota: ${totalAmount} PLN`, 20, 40);

		doc.save(`panel_managera_${dateString}.pdf`);

		// Clear localStorage
		localStorage.clear();

		// Refresh the page
		window.location.reload();
	};

	return (
		<div className="manager-panel">
			<button className="close-button" onClick={onClose}>
				X
			</button>
			<h2>Panel Managera</h2>
			<div className="manager-info">
				<div className="info-item">
					<strong>Łączna liczba stolików (w ciągu dnia):</strong>{" "}
					{totalTablesDuringDay}
				</div>
				<div className="info-item">
					<strong>Łączna liczba stolików i wynosów (opłaconych):</strong>{" "}
					{totalWynos}
				</div>
				<div className="info-item">
					<strong>Łączna kwota:</strong> {totalAmount} PLN
				</div>
			</div>
			<button className="export-button" onClick={handleExportToPDF}>
				Zamknij dzień i pobierz PDF
			</button>
		</div>
	);
};

export default ManagerPanel;
