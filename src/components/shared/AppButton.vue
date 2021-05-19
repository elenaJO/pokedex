<template>
	<button 
		:disabled="disabled"
		class="app-button"
		@click="$emit('click-btn')"
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
		max-width: 275px;
		min-width: 150px;
		padding: 11px 20px;
		@include transition(.5s ease-in-out);
		width: auto;

		&__text {
			font-weight: 700;
			line-height: $medium22;
			margin-left: 10px;
		}

		&:disabled {
			background-color: $light-grey;
			cursor: not-allowed;

			&:hover {
				background-color: $light-grey;
			}
		}

		&:hover {
			background-color: $medium-red;
		}

		@media (min-width: 768px) {
			width: 100%;
		}

		@media (max-width: 374px) {
			min-width: auto;
		}
	}
</style>