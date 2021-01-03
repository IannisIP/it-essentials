<template>
	<div class="orders-container">
		<h2 id="my-cart-title">Detalii comanda</h2>
		<div class="orders-wrapper">
			<div class="carts-wrapper">
				<div class="carts">
					<div class="cart-vendor-container ma-4">
						<div class="cart-widget mt-4 mb-4">
							Modalitate livrare
							<v-checkbox
								input-value="true"
								value
								readonly
								label="Livrare prin curier"
							></v-checkbox>
						</div>
					</div>
				</div>
				<div class="carts">
					<div class="cart-vendor-container ma-4">
						<div class="cart-widget mt-4 mb-4">
							Date facturare
						</div>
					</div>
				</div>
				<div class="carts">
					<div class="cart-vendor-container ma-4">
						<div class="cart-widget mt-4 mb-4">
							Modalitate de plata
						</div>
					</div>
				</div>
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

					<v-btn color="primary" class="ma-2" @click="openConfirmation">
						<v-icon>mdi-chevron-right</v-icon>
						Finalizare
					</v-btn>
				</v-card>
			</div>
		</div>
		<LoadingOverlay v-if="state.loading" />
	</div>
</template>

<script>
import { computed, reactive } from "@vue/composition-api";
import router from "@/router";
import OrdersService from "@/services/OrdersService.js";
import LoadingOverlay from "@/shared-components/LoadingOverlay.vue";

export default {
	components: {
		LoadingOverlay,
	},
	setup(props, { root }) {
		const state = reactive({
			pretLivrare: 15,
			loading: false,
		});

		const productsByOrder = computed(() => {
			return root.$store.getters["GET_PRODUCTS_BY_ORDER"];
		});

		const totalCart = computed(() => {
			return root.$store.getters["TOTAL_CART"] + state.pretLivrare;
		});

		const openConfirmation = async () => {
			const order = root.$store.getters["GET_ORDER"];
			state.loading = true;
			try {
				const response = await OrdersService.sendOrder(order);
				router.push("/confirmation");

				console.log(response);
				//if (response.ok)
				//else alert(reponse.message);
			} catch (e) {
				alert(e);
			} finally {
				state.loading = false;
			}
		};
		return {
			openConfirmation,
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

@media screen and (max-width: 500px) {
	.orders-wrapper {
		flex-direction: column;
	}
}

@media screen and (max-width: 1000px) {
	.total-summary-container {
		width: auto !important;
	}
}

.total-summary-container {
	width: 400px;
}

#my-cart-title {
	text-align: center;
	margin: 4px;
}

.cart-vendor-container {
	background-color: #e4f1f9;
	position: relative;
	overflow: hidden;
	padding: 16px;
	margin: 0 0 20px;
	border-radius: 3px;
	width: 800px;

	.cart-vendor-title {
		font-size: 20px;
		text-indent: 10px;
		margin: 0 0 10px;
		font-weight: normal;
	}

	.product-container {
		display: flex;
		flex-direction: row;
	}
	.cart-widget {
		box-shadow: 1px 1px 2px #bbc6cc;
		padding: 30px 25px 20px 25px;
		border-radius: 5px;

		background-color: #fff;

		min-height: 200px;

		.product-image {
			text-align: center;
			float: left;
		}

		.product-summary {
			display: flex;
			flex-wrap: wrap;
			flex: 1;

			.main-product-title {
				font-size: 14px;
				color: #000;
				margin: 0 0 20px;
				display: block;
				font-weight: 700;

				float: left;
			}

			//  border: 1px solid #bbb;
			::v-deep.v-select__slot {
				border-radius: 4px;
				border: 1px solid rgb(151, 124, 124);
			}
			::v-deep.v-text-field.v-input--is-focused
				> .v-input__control
				> .v-input__slot:before,
			::v-deep.theme--light.v-text-field
				> .v-input__control
				> .v-input__slot:before,
			::v-deep.v-text-field.v-input--is-focused
				> .v-input__control
				> .v-input__slot:after {
				border: none;
			}
			.select-container {
				display: flex;
				::v-deep.v-text-field.v-select {
					padding-top: 0px !important;
				}
				align-items: baseline;
				width: 80px;

				span {
					font-size: 12px;
				}
			}

			.title-container {
				flex-basis: 402px;
			}
			.remove-btn-wrapper {
				display: flex;
				margin-left: auto;
			}
			.line-price {
				flex-basis: 72px;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.cart-vendor-container {
		width: auto !important;
	}
}
</style>
