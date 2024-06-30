import React, { useState, useEffect, useRef } from "react";
import "./PizzaModal.css";
import { products } from "./Produkt";

const PizzaModal = ({ selectedSize, onClose, onAddPizza }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredPizzas, setFilteredPizzas] = useState([]);
	const [selectedPizza, setSelectedPizza] = useState(null);

	const modalRef = useRef(null);

	useEffect(() => {
		setFilteredPizzas(
			products.filter(
				(item) =>
					item.category === "Pizza" &&
					(!selectedSize || item.cm === selectedSize)
			)
		);
	}, [selectedSize]);

	useEffect(() => {
		const filtered = products.filter(
			(item) =>
				item.category === "Pizza" &&
				(!selectedSize || item.cm === selectedSize) &&
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredPizzas(filtered);
	}, [searchTerm, selectedSize]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				onClose();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handlePizzaSelection = (pizza) => {
		setSelectedPizza(pizza);
		onAddPizza(pizza);
		onClose();
	};

	return (
		<div className="pizza-modal-overlay">
			<div className="pizza-modal" ref={modalRef}>
				<h2>Wybierz pizzę do połowy</h2>
				<input
					type="text"
					placeholder="Szukaj pizzy..."
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<ul>
					{filteredPizzas.map((pizza) => (
						<li key={pizza.id} onClick={() => handlePizzaSelection(pizza)}>
							<div className="pizza-item">
								<div className="pizza-details">
									<h3>{pizza.name}</h3>
									<p>{pizza.price} zł</p>
								</div>
							</div>
						</li>
					))}
				</ul>
				<button onClick={onClose}>Anuluj</button>
			</div>
		</div>
	);
};

export default PizzaModal;
