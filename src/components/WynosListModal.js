import React from "react";
import Table from "./Table";
import "./WynosListModal.css";

const WynosListModal = ({ tables, onClose, onTableClick }) => {
	return (
		<div className="wynos-modal-overlay">
			<div className="wynos-modal">
				<button className="close-button" onClick={onClose}>
					×
				</button>
				<h2>Wybierz stolik</h2>
				<div className="wynos-table-list">
					{tables.map((table) => (
						<Table
							key={table.id}
							id={table.id}
							name={table.name}
							status={table.status}
							products={table.products}
							onTableClick={() => onTableClick(table.id)}
						/>
					))}
				</div>
				<button className="button" onClick={onClose}>
					Zamknij
				</button>
			</div>
		</div>
	);
};

export default WynosListModal;
