import React from "react";
import { saveReceipt } from "./utils/saveReceipt"; // Import funkcji do zapisu paragonu

const TableComponent = ({ tableData, updateManagerPanel }) => {
	const handleCloseTable = async () => {
		try {
			// Tutaj możesz dodać logikę do zapisania paragonu lub innych danych stolika
			await saveReceipt(tableData.name, tableData.paymentDetails);

			// Aktualizuj dane w ManagerPanel
			updateManagerPanel(tableData.type, tableData.quantity);

			// Wyczyść dane lokalne (opcjonalne, jeśli nie potrzebujesz ich już lokalnie)
			// clearSelectedItems(tableData.name);
		} catch (error) {
			console.error("Błąd podczas zamykania stolika:", error);
		}
	};

	return (
		<div className="table-component">
			<h3>{tableData.name}</h3>
			<p>Opis stolika</p>
			<button onClick={handleCloseTable}>Zamknij stolik</button>
		</div>
	);
};

export default TableComponent;
