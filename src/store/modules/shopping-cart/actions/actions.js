import OrdersService from "@/services/OrdersService";

export const actions = {
	GET_ORDER: async ({ commit }) => {
		const order = await OrdersService.getOrder("mockURL");
		commit("SET_ORDER", order);
	},
	SET_PRODUCT_TO_CART: ({ commit }, product) => {
		commit("SET_PRODUCT_TO_CART", product);
	},
};
