<template>
	<div class="app-list">
		<span
			@click="$emit('click-list', detail)"
			class="app-list__text">
			{{ detail ? detail.name : '' }}
		</span>
		<button 
			class="app-list__content-start"
			@click="$emit('click-detail')"
		>
			<AppStart 
				:color="detail.favorite ? '#ECA539' : '#BFBFBF'"
			/>
		</button>
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
		margin: 0 auto;
		max-width: 570px;
		padding: 8px 20px;

		&__content-start {
			@include flex-center();
			background-color: $light-white;
			border: none;
			@include border-radius(50%);
			cursor: pointer;
			height: 44px;
			width: 44px;
		}

		&__text {
			cursor: pointer;
			font-size: $medium22;
		}
	}
</style>