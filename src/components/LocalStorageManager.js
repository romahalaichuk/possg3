// LocalStorageManager.js

// Functions to manage selected items and extras
export const getSelectedItems = (tableName) => {
	const storedItems = localStorage.getItem(`${tableName}_items`);
	return storedItems ? JSON.parse(storedItems) : [];
};

export const addSelectedItem = (
	tableName,
	productId,
	productName,
	productPrice,
	productComment = ""
) => {
	const selectedItems = getSelectedItems(tableName);
	const existingItemIndex = selectedItems.findIndex(
		(item) => item.id === productId
	);

	if (existingItemIndex !== -1) {
		selectedItems[existingItemIndex].quantity += 1;
	} else {
		selectedItems.push({
			id: productId,
			name: productName,
			price: productPrice,
			quantity: 1,
			comment: productComment,
			extras: [],
		});
	}

	localStorage.setItem(`${tableName}_items`, JSON.stringify(selectedItems));
};

export const removeSelectedItem = (tableName, productId) => {
	const selectedItems = getSelectedItems(tableName);
	const updatedItems = selectedItems
		.map((item) => {
			if (item.id === productId) {
				item.quantity -= 1;
			}
			return item;
		})
		.filter((item) => item.quantity > 0);

	localStorage.setItem(`${tableName}_items`, JSON.stringify(updatedItems));
};

export const clearSelectedItems = (tableName) => {
	localStorage.removeItem(`${tableName}_items`);
};

export const updateSelectedItems = (tableName, items) => {
	localStorage.setItem(`${tableName}_items`, JSON.stringify(items));
};

export const addExtraToItem = (tableName, productId, extra) => {
	const selectedItems = getSelectedItems(tableName);
	const itemIndex = selectedItems.findIndex((item) => item.id === productId);

	if (itemIndex !== -1) {
		const item = selectedItems[itemIndex];
		if (!item.extras) {
			item.extras = [];
		}
		item.extras.push(extra);
		localStorage.setItem(`${tableName}_items`, JSON.stringify(selectedItems));
	}
};

export const removeExtraFromItem = (tableName, productId, extraId) => {
	const selectedItems = getSelectedItems(tableName);
	const itemIndex = selectedItems.findIndex((item) => item.id === productId);

	if (itemIndex !== -1) {
		const item = selectedItems[itemIndex];
		item.extras = item.extras.filter((extra) => extra.id !== extraId);
		localStorage.setItem(`${tableName}_items`, JSON.stringify(selectedItems));
	}
};

// Functions to manage table status
export const getTableStatus = (tableName) => {
	return localStorage.getItem(`${tableName}_status`) || "free";
};

export const setTableStatus = (tableName, status) => {
	localStorage.setItem(`${tableName}_status`, status);
};

export const clearTableStatus = (tableName) => {
	localStorage.removeItem(`${tableName}_status`);
};
