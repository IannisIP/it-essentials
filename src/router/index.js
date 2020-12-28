import Vue from "vue";
import VueRouter from "vue-router";
import ProductsCatalog from "../products-catalog/ProductsCatalog.vue";
import ProductsFavorites from "../products-favorites/ProductFavorite.vue";
import ProductsOrder from "../products-order/ProductsOrder.vue";
import Checkout from "../products-order/partials/Checkout.vue";

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
		path: "/cart/products",
		name: "ProductOrder",
		component: ProductsOrder,
	},
	{
		path: "/cart/checkout",
		name: "ProductCheckout",
		component: Checkout,
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

Vue.use(VueRouter);

export default router;
