<template>
	<v-card max-width="250" min-width="250" class="ma-2">
		<v-img height="250" :src="product.image || DefaultImage"></v-img>
		<v-card-title class="mx-auto">{{ product.title }}</v-card-title>

		<div class="rating-wrapper">
			<v-rating
				:value="4.5"
				color="amber"
				dense
				half-increments
				readonly
				size="14"
			></v-rating>
			1 review
		</div>
		<v-card-subtitle>{{ product.price }} LEI</v-card-subtitle>
		<v-btn color="primary" class="ma-2" @click="handleBuy">
			<v-icon>mdi-cart</v-icon>
			Buy
		</v-btn>
	</v-card>
</template>

<script>
import { computed } from "@vue/composition-api";
import DefaultImage from "../../assets/logo.png";
export default {
	props: {
		product: {
			required: true,
			type: Object,
		},
	},
	setup(props, { root }) {
		const reviews = computed(() => {});
		const handleBuy = () => {
			//add product to store shopping cart.
			root.$store.dispatch("cart/SET_PRODUCT_TO_CART", props.product);
		};
		return {
			reviews,
			handleBuy,
			DefaultImage,
		};
	},
};
</script>

<style scoped lang="scss">
::v-deep.v-card.v-sheet {
	display: flex;
	flex-direction: column;
}

.rating-wrapper {
	display: flex;
	justify-content: center;
}
</style>
