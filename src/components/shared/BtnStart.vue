<template>
	<div class="btn-start">
		<app-start 
			:color="active ? '#ECA539' : '#BFBFBF'"
		/>
	</div>
</template>
<script>
import AppStart from './AppStart.vue';

export default {
  components: { AppStart },
	name: 'btn-start',
	props: {
		active: {
			types: String,
			default: false,
		},
	},
};
</script>
<style lang="scss" scoped>
.btn-start {
	@include flex-center();
		background-color: $light-white;
		@include border-radius(50%);
		height: 44px;
		width: 44px;
}
</style>