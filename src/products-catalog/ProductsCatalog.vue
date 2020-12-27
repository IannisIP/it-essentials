<template>
	<div class="products-catalog" v-if="loading">
		<Product v-for="product in products" :product="product" :key="product.id" />
	</div>
	<div v-else>
		Sorry, no products yet!
	</div>
</template>

<script>
import { computed, onMounted } from "vue";
import Product from "./product/Product";
export default {
	components: {
		Product,
	},
	setup(props, context) {
		onMounted(() => {
			context.$store.dispatch["GET_PRODUCTS"];
		});

		return {
			products: computed(() => {
				return context.$store.getters["GET_PRODUCTS"];
			}),
			loading: computed(() => {
				return context.$store.getters["LOADING"];
			}),
		};
	},
};
</script>

<style scoped lang="scss">
.products-catalog {
	display: flex;
}
</style>
