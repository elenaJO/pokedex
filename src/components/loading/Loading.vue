<template>
  <div 
		class="loading"
		:class="[{ 'modal': modal }]"
	>
		<div class="circle-loader">
			<img src="../../assets/images/loader.svg" alt="loader">
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	name: 'loading',
	computed: {
		...mapGetters([
			'loading',
		]),
	},
	props: {
		modal: {
			types: Boolean,
			default: false,
		},
	},
}
</script>
<style lang="scss" scoped>
	.loading {
		background-color: $medium-white;
		@include flex-center();
		height: calc(100vh - 197px);

		&.modal {
			height: 100%;
		}
	}

	.circle-loader {
		animation: loader-spin 2s infinite linear;
		border-radius: 50%;
		display: inline-block;
		height: 110x;
		margin-bottom: 10px;
		position: relative;
		vertical-align: top;
		width: 110px;
	}

	@keyframes loader-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>