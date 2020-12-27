import Vue from "vue";
import VueRouter from "vue-router";
import ProductsCatalog from "../products-catalog/ProductsCatalog.vue";
import ProductsFavorites from "../products-favorites/ProductFavorite.vue";
import ProductsOrder from "../products-order/ProductsOrder.vue";

const routes = [
	{
		path: "/",
		name: "ProductsCatalog",
		component: ProductsCatalog,
	},
	{
		path: "/favorites",
		name: "ProductsFavorites",
		component: ProductsFavorites,
	},
	{
		path: "/order",
		name: "ProductOrder",
		component: ProductsOrder,
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

Vue.use(VueRouter);

export default router;
