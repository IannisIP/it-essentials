<template>
	<div class="orders-container">
		<h2 id="my-cart-title">Cosul meu</h2>
		<div class="orders-wrapper">
			<div class="carts-wrapper">
				<Cart
					v-for="product in productsByOrder"
					:product="product"
					:key="product.id"
				/>
			</div>
			<div class="total-summary-container ma-4">
				<v-card>
					<v-card-title>Sumar comanda</v-card-title>
					<v-card-subtitle>Cost produse: {{ totalCart }} lei </v-card-subtitle>
					<v-card-subtitle
						>Cost livrare: {{ state.pretLivrare }} lei</v-card-subtitle
					>

					<v-divider></v-divider>

					<div class="total-wrapper ma-4">
						<h1>Total:</h1>
						{{ totalCart }} lei
					</div>

					<v-btn color="primary" class="ma-2" @click="openCheckout">
						<v-icon>mdi-chevron-right</v-icon>
						Continua
					</v-btn>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script>
import Cart from "./partials/Cart";
import router from "@/router";
import { computed, reactive } from "@vue/composition-api";

export default {
	components: {
		Cart,
	},
	setup(props, { root }) {
		const state = reactive({
			pretLivrare: 15,
		});

		const productsByOrder = computed(() => {
			return root.$store.getters["GET_PRODUCTS_BY_ORDER"];
		});

		const totalCart = computed(() => {
			return root.$store.getters["TOTAL_CART"] + state.pretLivrare;
		});
		return {
			openCheckout: () => {
				router.push("/cart/checkout");
			},
			productsByOrder,
			totalCart,
			state,
		};
	},
};
</script>

<style scoped lang="scss">
.orders-container {
	text-align: left;
	margin-top: 32px;

	h2 {
		padding: 20px;
	}
}

.orders-wrapper {
	display: flex;
	padding: 16px;
	justify-content: center;
}

.total-summary-container {
	width: 400px;
}

#my-cart-title {
	position: relative;
	left: 150px;
	padding-bottom: 4px;
}
</style>
