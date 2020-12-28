<template>
	<div class="orders-container">
		<h2 id="my-cart-title">Cosul meu</h2>
		<div class="orders-wrapper">
			<div class="carts">
				<div class="cart-vendor-container ma-4">
					<div class="cart-widget mt-4 mb-4">
						<div class="product-container">
							<div class="product-image ma-4">
								<v-img height="120" width="120" :src="DefaultImage"></v-img>
							</div>
							<div class="product-summary">
								<div class="title-container ma-4">
									<a
										class="main-product-title"
										href="https://www.emag.ro/mouse-gaming-razer-deathadder-v2-cablu-speedflex-20k-dpi-iluminare-chroma-rgb-82grame-negru-rz01-03210100-r3m1/pd/DVSVKWBBM/"
										title="Mouse gaming Razer DeathAdder V2, cablu SpeedFlex, 20K DPI, iluminare Chroma RGB, 82grame, Negru"
										>Mouse gaming Razer DeathAdder V2, cablu SpeedFlex, 20K DPI,
										iluminare Chroma RGB, 82grame, Negru</a
									>
								</div>

								<div class="select-container ma-4">
									<v-select :items="selectMaxQuantity" class="mr-2"></v-select>
									<span>buc</span>
								</div>

								<div class="line-price ma-4">300 lei</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="total-summary-container ma-4">
				<v-card>
					<v-card-title>Sumar comanda</v-card-title>
					<v-card-subtitle>Cost produse: 100lei </v-card-subtitle>
					<v-card-subtitle>Cost livrare: 15lei</v-card-subtitle>

					<v-divider></v-divider>

					<div class="total-wrapper ma-4">
						<h1>Total:</h1>
						300lei
					</div>

					<v-btn color="primary" class="ma-2">
						<v-icon>mdi-chevron-right</v-icon>
						Continua
					</v-btn>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script>
import DefaultImage from "@/assets/logo.png";
export default {
	setup() {
		return {
			DefaultImage,
			selectMaxQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
			// width: 665px;
			float: right !important;

			.main-product-title {
				font-size: 14px;
				color: #000;
				margin: 0 0 20px;
				display: block;
				font-weight: 700;

				float: left;

				width: 300px;
			}

			//  border: 1px solid #bbb;
			::v-deep.v-select__slot {
				border-radius: 4px;
				border: 1px solid #bbb;
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

			.select-container,
			.title-container {
				float: left;
			}
			.line-price {
				text-align: right;
				float: left;
			}
		}
	}
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
