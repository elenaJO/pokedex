<template>
	<div class="app-list">
		<span class="app-list__text">{{ detail ? detail.name : '' }}</span>
		<div class="app-list__content-start">
			<AppStart color="#BFBFBF"/>
		</div>
	</div>
</template>
<script>
import AppStart from './AppStart';

export default {
	name: 'app-list',
	components: {
		AppStart,
	},
	props: {
		detail: {
			types: Object,
			default: () => {},
		},
	},
}
</script>
<style lang="scss" scoped>
	.app-list {
		@include flex-between();
		background-color: $white;
		color: $medium-grey;
		@include border-radius(5px);
		max-width: 570px;
		padding: 8px 20px;

		&__content-start {
			@include flex-center();
			background-color: $light-white;
			@include border-radius(50%);
			height: 44px;
			width: 44px;
		}

		&__text {
			font-size: $medium22;
		}
	}
</style>