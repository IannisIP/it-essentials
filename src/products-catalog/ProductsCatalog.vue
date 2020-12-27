<template>
	<div class="products-catalog" v-if="!loading && products.length">
		<Product v-for="product in products" :product="product" :key="product.id" />
	</div>
	<!-- <div v-else-if="!loading && !products.length">
		Sorry no products yet!
	</div> -->
	<LoadingOverlay v-else />
</template>

<script>
import { computed, onMounted } from "@vue/composition-api";
import Product from "./product/Product";
import LoadingOverlay from "../shared-components/LoadingOverlay";

export default {
	components: {
		Product,
		LoadingOverlay,
	},
	setup(props, { root }) {
		onMounted(() => {
			root.$store.dispatch("GET_PRODUCTS");
		});

		return {
			products: computed(() => {
				return root.$store.getters["GET_PRODUCTS"];
			}),
			loading: computed(() => {
				return root.$store.getters["LOADING"];
			}),
		};
	},
};
</script>

<style scoped lang="scss">
.products-catalog {
	display: flex;
	flex-wrap: wrap;
}
</style>
