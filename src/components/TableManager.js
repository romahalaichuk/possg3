import React, { useState, useEffect } from "react";
import "./TableManager.css";
import Table from "./Table";
import Modal from "./Modal";
import MenuManager from "./MenuManager";
import WynosListModal from "./WynosListModal";
import ManagerPanel from "./ManagerPanel";
import "./TableManager.css";

const TABLES_STORAGE_KEY = "tables";
const WYNOS_TABLES_STORAGE_KEY = "wynosTables";
const MANAGER_PANEL_STATE_KEY = "managerPanelOpen";

const TableManager = () => {
	const [tables, setTables] = useState([]);
	const [wynosTables, setWynosTables] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [menuManagerOpen, setMenuManagerOpen] = useState(false);
	const [wynosModalOpen, setWynosModalOpen] = useState(false);
	const [selectedTableId, setSelectedTableId] = useState(null);
	const [isWynos, setIsWynos] = useState(false);
	const [managerPanelOpen, setManagerPanelOpen] = useState(false);

	useEffect(() => {
		const storedTables = loadDataFromLocalStorage(TABLES_STORAGE_KEY);
		if (storedTables) {
			setTables(storedTables);
		} else {
			initializeTables();
		}

		const storedWynosTables = loadDataFromLocalStorage(
			WYNOS_TABLES_STORAGE_KEY
		);
		if (storedWynosTables) {
			setWynosTables(storedWynosTables);
		} else {
			initializeWynosTables();
		}

		const storedManagerPanelState = loadDataFromLocalStorage(
			MANAGER_PANEL_STATE_KEY
		);
		if (storedManagerPanelState !== null) {
			setManagerPanelOpen(storedManagerPanelState === "true");
		}
	}, []);

	const initializeTables = () => {
		const initialTables = [
			{ id: 0, name: "Wynos", status: "special", products: [] },
			...Array.from({ length: 45 }, (_, index) => ({
				id: index + 1,
				name: `Table ${index + 1}`,
				status: "free",
				products: [],
			})),
		];
		setTables(initialTables);
		saveDataToLocalStorage(TABLES_STORAGE_KEY, initialTables);
	};

	const initializeWynosTables = () => {
		const initialWynosTables = Array.from({ length: 20 }, (_, index) => ({
			id: index + 40,
			name: `Wynos ${index + 1}`,
			status: "free",
			products: [],
		}));
		setWynosTables(initialWynosTables);
		saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, initialWynosTables);
	};

	const saveDataToLocalStorage = (key, data) => {
		localStorage.setItem(key, JSON.stringify(data));
	};

	const loadDataFromLocalStorage = (key) => {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	};

	const handleTableClick = (tableId) => {
		if (tableId === 0) {
			setWynosModalOpen(true);
		} else {
			const clickedTable = tables.find((table) => table.id === tableId);
			setSelectedTableId(tableId);
			setIsWynos(false);

			if (clickedTable.status === "free") {
				setModalOpen(true);
			} else if (clickedTable.status === "occupied") {
				setMenuManagerOpen(true);
			}
		}
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleModalConfirm = (tableName) => {
		const updatedTables = isWynos
			? wynosTables.map((table) =>
					table.id === selectedTableId
						? { ...table, name: tableName, status: "occupied" }
						: table
			  )
			: tables.map((table) =>
					table.id === selectedTableId
						? { ...table, name: tableName, status: "occupied" }
						: table
			  );

		if (isWynos) {
			setWynosTables(updatedTables);
			saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, updatedTables);
		} else {
			setTables(updatedTables);
			saveDataToLocalStorage(TABLES_STORAGE_KEY, updatedTables);
		}

		setModalOpen(false);
		setMenuManagerOpen(true);
	};

	const handleMenuManagerClose = () => {
		setMenuManagerOpen(false);
		setSelectedTableId(null);
	};

	const handleWynosModalClose = () => {
		setWynosModalOpen(false);
	};

	const handleWynosTableClick = (tableId) => {
		const clickedTable = wynosTables.find((table) => table.id === tableId);
		if (clickedTable) {
			setSelectedTableId(tableId);
			setIsWynos(true);

			if (clickedTable.status === "free") {
				setModalOpen(true);
			} else if (clickedTable.status === "occupied") {
				setMenuManagerOpen(true);
			}
		}
	};

	const handleAddProduct = (productId, productName) => {
		const updatedTables = isWynos
			? wynosTables.map((table) =>
					table.id === selectedTableId
						? {
								...table,
								products: [
									...table.products,
									{ id: productId, name: productName },
								],
						  }
						: table
			  )
			: tables.map((table) =>
					table.id === selectedTableId
						? {
								...table,
								products: [
									...table.products,
									{ id: productId, name: productName },
								],
						  }
						: table
			  );

		if (isWynos) {
			setWynosTables(updatedTables);
			saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, updatedTables);
		} else {
			setTables(updatedTables);
			saveDataToLocalStorage(TABLES_STORAGE_KEY, updatedTables);
		}
	};

	const toggleManagerPanel = () => {
		const newState = !managerPanelOpen;
		setManagerPanelOpen(newState);
		saveDataToLocalStorage(MANAGER_PANEL_STATE_KEY, newState.toString());
	};

	const resetTable = (tableId) => {
		const updatedTables = isWynos
			? wynosTables.map((table) =>
					table.id === tableId
						? {
								...table,
								status: "free",
								products: [],
						  }
						: table
			  )
			: tables.map((table) =>
					table.id === tableId
						? {
								...table,
								status: "free",
								products: [],
						  }
						: table
			  );

		if (isWynos) {
			setWynosTables(updatedTables);
			saveDataToLocalStorage(WYNOS_TABLES_STORAGE_KEY, updatedTables);
		} else {
			setTables(updatedTables);
			saveDataToLocalStorage(TABLES_STORAGE_KEY, updatedTables);
		}
	};

	const selectedTable = isWynos
		? wynosTables.find((table) => table.id === selectedTableId)
		: tables.find((table) => table.id === selectedTableId);

	return (
		<div className="table-manager">
			<div className="table-grid">
				{tables.map((table) => (
					<Table
						key={table.id}
						id={table.id}
						name={table.name}
						status={table.status}
						products={table.products}
						onTableClick={handleTableClick}
					/>
				))}
			</div>
			<button className="manager-panel-button" onClick={toggleManagerPanel}>
				Manager Panel
			</button>
			{managerPanelOpen && (
				<div className="modal-overlay" onClick={toggleManagerPanel}>
					<ManagerPanel tables={tables} wynosTables={wynosTables} />
				</div>
			)}
			{wynosModalOpen && (
				<div className="modal-overlay" onClick={handleWynosModalClose}>
					<WynosListModal
						tables={wynosTables}
						onTableClick={handleWynosTableClick}
						onClose={handleWynosModalClose}
					/>
				</div>
			)}
			{modalOpen && (
				<Modal
					open={modalOpen}
					onClose={handleModalClose}
					onConfirm={handleModalConfirm}
					onAddProduct={handleAddProduct}
				/>
			)}
			{menuManagerOpen && selectedTable && (
				<MenuManager
					tableName={selectedTable.name}
					onClose={handleMenuManagerClose}
					onAddProduct={handleAddProduct}
					resetTable={() => resetTable(selectedTable.id)}
					products={selectedTable.products}
				/>
			)}
		</div>
	);
};

export default TableManager;
