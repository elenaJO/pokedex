<template>
	<button 
		:disabled="disabled"
		class="app-button"
	>
		<slot></slot>
		<span class="app-button__text">{{ title }}</span>
	</button>
</template>
<script>
export default {
	name: 'AppButtons',
	props: {
		title: String,
		disabled: {
			types: Boolean,
			default: false,
		},
	}
}
</script>
<style lang="scss" scoped>

	.app-button {
		align-items: center;
		background-color: $black-red;
		border: none;
		@include border-radius(60px);
		color: $white;
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		min-width: 150px;
		padding: 11px 20px;
		@include transition(.5s ease-in-out);

		&__text {
			font-weight: 700;
			line-height: $medium22;
			margin-left: 10px;
		}

		&:disabled {
			background-color: $light-grey;
			cursor: not-allowed;
		}

		&:hover {
			background-color: $medium-red;
		}
	}
</style>