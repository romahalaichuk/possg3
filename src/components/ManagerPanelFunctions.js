// ManagerPanelFunctions.js

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
	const totalAmountTables = tables.reduce((accumulator, table) => {
		if (
			table.status === "occupied" ||
			table.status === "paid" ||
			table.status === "paid-card"
		) {
			return (
				accumulator +
				table.products.reduce((acc, product) => acc + product.price, 0)
			);
		}
		return accumulator;
	}, 0);

	const totalAmountWynos = wynosTables.reduce((accumulator, table) => {
		if (table.status === "occupied") {
			return (
				accumulator +
				table.products.reduce((acc, product) => acc + product.price, 0)
			);
		}
		return accumulator;
	}, 0);

	return totalAmountTables + totalAmountWynos;
};

export const calculateAdjustedTotal = () => {
	// Tutaj umieść logikę do obliczania sumy na podstawie swoich potrzeb
	// Na przykład, mogą to być jakieś dodatkowe obliczenia, modyfikacje, itp.
	return 0; // Zwracamy wartość obliczoną w funkcji
};
