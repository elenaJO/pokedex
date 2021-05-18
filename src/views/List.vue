<template>
  <div class="list">
		<AppSearch/>
		<div class="list__content-card">
			<AppList/>
		</div>
		<div class="list__content-options">
			<AppButton 
				title="All"
			>
				<img 
					src="../assets/icons/all.svg" 
					alt="all"
				>
			</AppButton>
			<AppButton 
				title="Favorites"
				class="list__btn-right"
			>
				<img 
					src="../assets/icons/start.svg" 
					alt="all"
				>
			</AppButton>
		</div>
	</div>
</template>
<script>
import AppButton from '../components/shared/AppButton.vue';
import AppList from '../components/shared/AppList.vue';
import AppSearch from '../components/shared/AppSearch.vue';

export default {
  components: { AppSearch, AppButton, AppList },
	name: 'List',
};
</script>
<style lang="scss" scoped>
	.list {
		background-color: $medium-white;
		min-height: 100vh;
		padding: 35px 32px;

		&__content-card {
			margin-top: 40px;
		}

		&__content-options {
			background-color: $white;
			box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
			bottom: 0;
			padding: 18px 30px;
			position: fixed;
			left: 0;
			right: 0;
		}

		&__btn-right {
			margin-left: 15px;
		}
	}
</style>