import React from "react";
import "./Table.css";

const Table = ({ id, name, status, onTableClick }) => {
	const handleClick = () => {
		onTableClick(id);
	};

	const generateTableName = () => {
		if (status === "free") {
			return `Table ${id}`;
		} else {
			return name;
		}
	};

	return (
		<div
			className={`table ${
				status === "occupied" ? "table-occupied" : "table-free"
			} ${status === "special" ? "table-special" : ""}`}
			onClick={handleClick}>
			<span className="table-name">{generateTableName()}</span>
		</div>
	);
};

export default Table;
