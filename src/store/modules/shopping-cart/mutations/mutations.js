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
	SET_PRODUCT_TO_CART(state, product) {
		state.order.push(product);
	},
};
