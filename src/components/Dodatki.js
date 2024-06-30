import React, { useState } from "react";
import ExtrasModal from "./ExtrasModal";
import PizzaModal from "./PizzaModal";
import "./Dodatki.css";

const Dodatki = ({
	selectedItemId,
	selectedItems,
	handleAddExtra,
	handleRemoveExtra,
}) => {
	const [showModal, setShowModal] = useState(false);
	const [showPizzaModal, setShowPizzaModal] = useState(false);

	const item = selectedItems.find((item) => item.id === selectedItemId);
	const selectedExtras = item ? item.extras || [] : [];
	const pizzaSize = item ? item.cm : null;

	const handleAddPizzaToItem = (pizza) => {
		handleAddExtra(selectedItemId, pizza);
		closePizzaModal();
	};

	const availableExtras = [
		{ id: 1, name: "Ser ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 2, name: "Ser ", price: 6.5, category: "Dod", cm: 32 },
		{ id: 3, name: "Ser ", price: 7.5, category: "Dod", cm: 42 },
		{ id: 4, name: "Ser ", price: 9.5, category: "Dod", cm: 60 },
		{ id: 5, name: "Pieczarki ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 6, name: "Pieczarki ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 7, name: "Pieczarki ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 8, name: "Pieczarki ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 9, name: "Prosciutto cotto ", price: 5.5, category: "Dod", cm: 23 },
		{
			id: 10,
			name: "Prosciutto cotto ",
			price: 6.5,
			category: "Dod",
			cm: 32,
		},
		{
			id: 11,
			name: "Prosciutto cotto ",
			price: 7.5,
			category: "Dod",
			cm: 42,
		},
		{
			id: 12,
			name: "Prosciutto cotto ",
			price: 9.5,
			category: "Dod",
			cm: 60,
		},
		{ id: 13, name: "Ananas ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 14, name: "Ananas ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 15, name: "Ananas ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 16, name: "Ananas ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 17, name: "Salame Napoli ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 18, name: "Salame Napoli ", price: 6.5, category: "Dod", cm: 32 },
		{ id: 19, name: "Salame Napoli ", price: 7.5, category: "Dod", cm: 42 },
		{ id: 20, name: "Salame Napoli ", price: 9.5, category: "Dod", cm: 60 },
		{ id: 21, name: "Cebula ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 22, name: "Cebula ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 23, name: "Cebula ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 24, name: "Cebula ", price: 7.5, category: "Dod", cm: 60 },
		{
			id: 25,
			name: "Kiełbasa peperoni ",
			price: 5.5,
			category: "Dod",
			cm: 23,
		},
		{
			id: 26,
			name: "Kiełbasa peperoni ",
			price: 6.5,
			category: "Dod",
			cm: 32,
		},
		{
			id: 27,
			name: "Kiełbasa peperoni ",
			price: 7.5,
			category: "Dod",
			cm: 42,
		},
		{
			id: 28,
			name: "Kiełbasa peperoni ",
			price: 9.5,
			category: "Dod",
			cm: 60,
		},
		{
			id: 29,
			name: "Papryczki jalapeno ",
			price: 4.5,
			category: "Dod",
			cm: 23,
		},
		{
			id: 30,
			name: "Papryczki jalapeno ",
			price: 5.5,
			category: "Dod",
			cm: 32,
		},
		{
			id: 31,
			name: "Papryczki jalapeno ",
			price: 6.5,
			category: "Dod",
			cm: 42,
		},
		{
			id: 32,
			name: "Papryczki jalapeno ",
			price: 7.5,
			category: "Dod",
			cm: 60,
		},
		{ id: 33, name: "Kurczak ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 34, name: "Kurczak ", price: 6.5, category: "Dod", cm: 32 },
		{ id: 35, name: "Kurczak ", price: 7.5, category: "Dod", cm: 42 },
		{ id: 36, name: "Kurczak ", price: 9.5, category: "Dod", cm: 60 },
		{ id: 37, name: "Kukurydza ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 38, name: "Kukurydza ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 39, name: "Kukurydza ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 40, name: "Kukurydza ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 41, name: "Pomidor ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 42, name: "Pomidor", price: 5.5, category: "Dod", cm: 32 },
		{ id: 43, name: "Pomidor ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 44, name: "Pomidor ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 45, name: "Camembert ", price: 7.5, category: "Dod", cm: 23 },
		{ id: 46, name: "Camembert ", price: 9.5, category: "Dod", cm: 32 },
		{ id: 47, name: "Camembert ", price: 11.5, category: "Dod", cm: 42 },
		{ id: 48, name: "Camembert ", price: 13.5, category: "Dod", cm: 60 },
		{ id: 49, name: "Boczek ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 50, name: "Boczek ", price: 6.5, category: "Dod", cm: 32 },
		{ id: 51, name: "Boczek ", price: 7.5, category: "Dod", cm: 42 },
		{ id: 52, name: "Boczek ", price: 9.5, category: "Dod", cm: 60 },
		{ id: 53, name: "Sos chilli ", price: 0.5, category: "Dod", cm: 23 },
		{ id: 54, name: "Sos chilli ", price: 1.5, category: "Dod", cm: 32 },
		{ id: 55, name: "Sos chilli ", price: 2.5, category: "Dod", cm: 42 },
		{ id: 56, name: "Sos chilli ", price: 3.5, category: "Dod", cm: 60 },
		{ id: 57, name: "Czosnek ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 58, name: "Czosnek ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 59, name: "Czosnek ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 60, name: "Czosnek ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 61, name: "Tuńczyk ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 62, name: "Tuńczyk ", price: 6.5, category: "Dod", cm: 32 },
		{
			id: 63,
			name: "Tuńczyk ",
			price: 7.5,
			category: "Dod",
			cm: 42,
		},
		{
			id: 64,
			name: "Tuńczyk ",
			price: 9.5,
			category: "Dod",
			cm: 60,
		},
		{ id: 65, name: "Jajko ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 66, name: "Jajko ", price: 4.5, category: "Dod", cm: 32 },
		{ id: 67, name: "Jajko ", price: 4.5, category: "Dod", cm: 42 },
		{ id: 68, name: "Jajko ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 69, name: "Oliwki ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 70, name: "Oliwki ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 71, name: "Oliwki ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 72, name: "Oliwki ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 73, name: "Papryka ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 74, name: "Papryka ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 75, name: "Papryka ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 76, name: "Papryka ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 77, name: "Feta ", price: 7.5, category: "Dod", cm: 23 },
		{ id: 78, name: "Feta ", price: 9.5, category: "Dod", cm: 32 },
		{ id: 79, name: "Feta ", price: 11.5, category: "Dod", cm: 42 },
		{ id: 80, name: "Feta ", price: 13.5, category: "Dod", cm: 60 },
		{ id: 81, name: "Mozzarella ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 82, name: "Mozzarella ", price: 6.5, category: "Dod", cm: 32 },
		{ id: 83, name: "Mozzarella ", price: 7.5, category: "Dod", cm: 42 },
		{ id: 84, name: "Mozzarella ", price: 9.5, category: "Dod", cm: 60 },
		{ id: 85, name: "Salame spianata ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 86, name: "Salame spianata ", price: 6.5, category: "Dod", cm: 32 },
		{
			id: 87,
			name: "Salame spianata ",
			price: 7.5,
			category: "Dod",
			cm: 42,
		},
		{
			id: 88,
			name: "Salame spianata ",
			price: 9.5,
			category: "Dod",
			cm: 60,
		},
		{ id: 89, name: "Gorgonzola ", price: 7.5, category: "Dod", cm: 23 },
		{ id: 90, name: "Gorgonzola ", price: 9.5, category: "Dod", cm: 32 },
		{ id: 91, name: "Gorgonzola ", price: 11.5, category: "Dod", cm: 42 },
		{ id: 92, name: "Gorgonzola ", price: 13.5, category: "Dod", cm: 60 },
		{
			id: 93,
			name: "Kiełbasa chorizo ",
			price: 5.5,
			category: "Dod",
			cm: 23,
		},
		{
			id: 94,
			name: "Kiełbasa chorizo ",
			price: 6.5,
			category: "Dod",
			cm: 32,
		},
		{
			id: 95,
			name: "Kiełbasa chorizo ",
			price: 7.5,
			category: "Dod",
			cm: 42,
		},
		{
			id: 96,
			name: "Kiełbasa chorizo ",
			price: 9.5,
			category: "Dod",
			cm: 60,
		},
		{ id: 97, name: "Karczochy ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 98, name: "Karczochy ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 99, name: "Karczochy ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 100, name: "Karczochy ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 101, name: "Kapary ", price: 4.5, category: "Dod", cm: 23 },
		{ id: 102, name: "Kapary ", price: 5.5, category: "Dod", cm: 32 },
		{ id: 103, name: "Kapary ", price: 6.5, category: "Dod", cm: 42 },
		{ id: 104, name: "Kapary ", price: 7.5, category: "Dod", cm: 60 },
		{ id: 105, name: "Krewetki ", price: 5.5, category: "Dod", cm: 23 },
		{ id: 106, name: "Krewetki ", price: 6.5, category: "Dod", cm: 32 },
		{ id: 107, name: "Krewetki ", price: 7.5, category: "Dod", cm: 42 },
		{ id: 108, name: "Krewetki ", price: 9.5, category: "Dod", cm: 60 },
	];

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleAddExtraToItem = (extra) => {
		handleAddExtra(selectedItemId, extra);
		closeModal();
	};

	const handleHalfHalfClick = () => {
		setShowPizzaModal(true);
	};

	const closePizzaModal = () => {
		setShowPizzaModal(false);
	};

	return (
		<div className="dodatki">
			<button onClick={openModal}>Dodatki</button>
			{showModal && (
				<ExtrasModal
					extras={availableExtras.filter(
						(extra) => !pizzaSize || extra.cm === pizzaSize
					)}
					onClose={closeModal}
					onAddExtra={handleAddExtraToItem}
					onHalfHalfClick={handleHalfHalfClick}
				/>
			)}
			{showPizzaModal && (
				<PizzaModal
					selectedSize={pizzaSize}
					onClose={closePizzaModal}
					onAddPizza={handleAddPizzaToItem}
				/>
			)}
			<ul>
				{selectedExtras.map((extra) => (
					<li key={extra.id}>
						{extra.name} - {extra.price} zł
						<button onClick={() => handleRemoveExtra(selectedItemId, extra.id)}>
							Usuń
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dodatki;
