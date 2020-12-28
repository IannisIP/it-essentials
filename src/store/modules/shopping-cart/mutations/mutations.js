export const mutations = {
	SET_ORDER(state, order) {
		state.order = order;
	},
	SET_DELIVERY(state, delivery) {
		state.deliveryMethod = delivery;
	},
	SET_DATE_FACTURARE(state, dateFact) {
		state.dateFacturare = dateFact;
	},
	SET_METODA_PLATA(state, metoda) {
		state.metodaPlata = metoda;
	},
	SET_PRODUCT_TO_CART(state, { id }) {
		const existingProduct = state.order.find((order) => order.id === id);
		if (existingProduct) {
			existingProduct.quantity += 1;
			const idx = state.order.findIndex(
				(order) => order.id == existingProduct.id
			);
			state.order.splice(idx, 1, existingProduct);
		} else {
			state.order.push({ id, quantity: 1 });
		}
	},
};
