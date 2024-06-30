export const getSelectedItems = (tableName) => {
	const storedItems = localStorage.getItem(tableName);
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

	localStorage.setItem(tableName, JSON.stringify(selectedItems));
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

	localStorage.setItem(tableName, JSON.stringify(updatedItems));
};

export const clearSelectedItems = (tableName) => {
	localStorage.removeItem(tableName);
};

export const updateSelectedItems = (tableName, items) => {
	localStorage.setItem(tableName, JSON.stringify(items));
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
		localStorage.setItem(tableName, JSON.stringify(selectedItems));
	}
};

export const removeExtraFromItem = (tableName, productId, extraId) => {
	const selectedItems = getSelectedItems(tableName);
	const itemIndex = selectedItems.findIndex((item) => item.id === productId);

	if (itemIndex !== -1) {
		const item = selectedItems[itemIndex];
		item.extras = item.extras.filter((extra) => extra.id !== extraId);
		localStorage.setItem(tableName, JSON.stringify(selectedItems));
	}
};
