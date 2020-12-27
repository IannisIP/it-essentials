<template>
	<v-card max-width="250" class="ma-2">
		<v-img
			height="250"
			src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
		></v-img>
		<v-card-title class="mx-auto">Cafe Badilico</v-card-title>

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
		<v-card-subtitle>1300 LEI</v-card-subtitle>
		<v-btn color="primary" class="ma-2">
			<v-icon>mdi-cart</v-icon>
			Buy
		</v-btn>
	</v-card>
</template>

<script>
export default {};
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
