<template>
	<div class="carts">
		<div class="cart-vendor-container ma-4">
			<div class="cart-widget mt-4 mb-4">
				<div class="product-container">
					<div class="product-image ma-4">
						<v-img
							height="120"
							width="120"
							:src="product.image || DefaultImage"
						></v-img>
					</div>
					<div class="product-summary">
						<div class="title-container ma-4">
							<a
								class="main-product-title"
								href="https://www.emag.ro/mouse-gaming-razer-deathadder-v2-cablu-speedflex-20k-dpi-iluminare-chroma-rgb-82grame-negru-rz01-03210100-r3m1/pd/DVSVKWBBM/"
								title="Mouse gaming Razer DeathAdder V2, cablu SpeedFlex, 20K DPI, iluminare Chroma RGB, 82grame, Negru"
								>{{ product.title }}</a
							>
						</div>

						<div class="select-container ma-4">
							<v-select
								:items="selectMaxQuantity"
								class="mr-2"
								:value="state.select"
								@change="updateOrderQuantity($event)"
							></v-select>
							<span>buc</span>
						</div>

						<div class="line-price ma-4">{{ product.price }} lei</div>

						<div class="remove-btn-wrapper">
							<v-btn
								color="primary"
								class="remove-btn ma-2"
								@click="handleRemove"
								outlined
							>
								<v-icon>mdi-trash-can</v-icon>
								Elimina
							</v-btn>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DefaultImage from "@/assets/logo.png";
import { reactive } from "@vue/composition-api";
import OrdersService from "@/services/OrdersService.js";

export default {
	props: {
		product: {
			required: true,
			type: Object,
		},
	},
	setup(props, { root }) {
		const state = reactive({
			select: props.product.quantity,
		});
		const updateOrderQuantity = async (value) => {
			state.select = value;
			root.$store.dispatch("cart/UPDATE_ORDER_QUANTITY", {
				...props.product,
				quantity: value,
			});

			await OrdersService.updateProductQuantity({
				quantity: value,
				productId: props.product.id,
			});
		};

		const handleRemove = async () => {
			root.$store.dispatch("cart/REMOVE_ORDER", props.product);

			await OrdersService.removeCartProduct({
				userId: 9912,
				productId: props.product.id,
			});
		};
		return {
			DefaultImage,
			selectMaxQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			updateOrderQuantity,
			state,
			handleRemove,
		};
	},
};
</script>

<style scoped lang="scss">
.cart-vendor-container {
	background-color: #e4f1f9;
	position: relative;
	overflow: hidden;
	padding: 16px;
	margin: 0 0 20px;
	border-radius: 3px;

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
	@media screen and (max-width: 500px) {
		.product-container {
			flex-direction: column;
		}
	}

	@media screen and (max-width: 1024px) {
		.total-summary-container {
			margin: 0px;
			width: auto;
		}
	}
}
</style>
