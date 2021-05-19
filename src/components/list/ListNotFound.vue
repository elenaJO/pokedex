
<template>
	<div class="list-not-found">
		<h2 class="list-not-found__title">Uh-oh!</h2>
		<p class="list-not-found__text">You look lost on your journey!</p>
		<AppButton
			@click-btn="goToHome"
			title="Go back home"
		/>
	</div>
</template>

<script>
import AppButton from '../shared/AppButton.vue';

function goToHome() {
	this.$router.push({
		name: 'Home',
	});
}

export default {
  components: { AppButton },
	name: 'list-not-found',
	methods: {
		goToHome,
	},
};
</script>
<style lang="scss" scoped>
	.list-not-found {
		@include flex-center();
		flex-direction: column;

		&__title {
			color: $medium-grey;
			font-size: $large36;
			font-weight: 700;
			line-height: 43px;
			margin-bottom: 10px;
		}

		&__text {
			color: $primary;
			font-size: $medium20;
			line-height: 150%;
			margin-bottom: 25px;
		}
	}
</style>