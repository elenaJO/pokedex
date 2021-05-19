<template>
	<div class="app-search">
		<img 
			src="../../assets/icons/search.svg" 
			alt="buscar"
			height="18px"
		>
		<input 
			type="text"
			placeholder="Search"
			class="app-search__text"
			@input="$emit('change-text', $event)"
		>
	</div>
</template>
<script>
export default {
	name: 'app-search',
};
</script>
<style lang="scss" scoped>
	.app-search {
		background-color: $white;
		@include border-radius(5px);
		margin: 0 auto;
		max-width: 570px;
		padding: 16px 15px;

		&__text {
			border: none;
			color: $medium-grey;
			font-size: $medium16;
			line-height: 140%;
			margin-left: 10px;
			outline: none;

			&::placeholder {
				color: $light-grey;
			}
		}
	}
</style>