export const calculateTotalTablesDuringDay = (tables) => {
	const occupiedTables = tables.filter(
		(table) =>
			table.status === "occupied" ||
			table.status === "paid" ||
			table.status === "paid-card"
	);
	return occupiedTables.length;
};

export const calculateTotalWynos = (wynosTables) => {
	const occupiedWynos = wynosTables.filter(
		(table) => table.status === "occupied"
	);
	return occupiedWynos.length;
};

export const calculateTotalAmount = (tables, wynosTables) => {
	const occupiedTables = tables.filter(
		(table) =>
			table.status === "occupied" ||
			table.status === "paid" ||
			table.status === "paid-card"
	);
	const totalAmountTables = occupiedTables.reduce(
		(accumulator, currentTable) =>
			accumulator +
			currentTable.products.reduce(
				(accumulator, product) => accumulator + product.price,
				0
			),
		0
	);

	const occupiedWynos = wynosTables.filter(
		(table) => table.status === "occupied"
	);
	const totalAmountWynos = occupiedWynos.reduce(
		(accumulator, currentTable) =>
			accumulator +
			currentTable.products.reduce(
				(accumulator, product) => accumulator + product.price,
				0
			),
		0
	);

	return totalAmountTables + totalAmountWynos;
};
