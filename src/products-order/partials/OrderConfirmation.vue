<template>
	<div class="confirmation-wrapper">
		Order Confirmed! Thank You!
	</div>
</template>

<script>
import { onMounted } from "@vue/composition-api";
import router from "@/router";

export default {
	setup() {
		onMounted(() => {
			setTimeout(() => {
				router.push("/");
			}, 2500);
		});
	},
};
</script>
<style scoped lang="scss">
.confirmation-wrapper {
	position: absolute;
	top: 50%;
	width: 100%;
}
</style>
