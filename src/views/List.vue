<template>
	<div>
		<div class="list">
			<AppSearch 
				@change-text="changeText"
			/>
			<div class="list__content-card">
				<template v-if="showList.length">
					<AppList 
						v-for="(item, index) in showList" 
						:key="item.name"
						:detail="item"
						class="mb-10"
						@click-detail="saveFavorite(index)"
						@click-list="showDetail"
					/>
				</template>
				<ListNotFound
					v-else 
					title="Go back home"/>
			</div>
			<div class="list__content-options">
				<AppButton 
					title="All"
					@click-btn="goToAll"
				>
					<img 
						src="../assets/icons/all.svg" 
						alt="all"
					>
				</AppButton>
				<AppButton 
					title="Favorites"
					class="list__btn-right"
					:disabled="favorites.length === 0"
					@click-btn="goToFavorites"
				>
					<img 
						src="../assets/icons/start.svg" 
						alt="all"
					>
				</AppButton>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import AppButton from '../components/shared/AppButton.vue';
import AppList from '../components/shared/AppList.vue';
import AppSearch from '../components/shared/AppSearch.vue';
import { mapGetters } from 'vuex';
import ListNotFound from '../components/list/ListNotFound.vue';

function created() {
	this.$store.dispatch('getListPok');
}

function saveFavorite(index) {
	if (this.$route.name === 'ListFavorite') {
		this.$store.dispatch('getPokDeleteFavorite', index);
	} else {
		this.$store.dispatch('getPokFavorite', index);
	}
}

function goToFavorites() {
	this.$router.push({
		name: 'ListFavorite'
	});
}

function goToAll() {
	this.$router.push({
		name: 'List'
	});
}

function changeShow(values) {
	if (this.$route.name === 'ListFavorite' && !values.length && !this.textSearch.length) {
		this.goToAll();
	}
}

function changeText($event) {
	this.textSearch = $event.target.value;
}

function showDetail(detail) {
	this.$router.push({
		name: this.$route.name === 'ListFavorite' ? 'DetailFavorite' : 'Detail',
		params: {
			name: detail.name,
		},
		query: {
			favorite: detail.favorite,
		},
	});
}

function showList() {
	const listShowPage = this.$route.name === 'ListFavorite' ? this.favorites : this.list;
	if (this.textSearch.length) {
		const newList = listShowPage.filter(p =>
			p.name.toLowerCase().indexOf(this.textSearch.toLowerCase()) > -1);
		return newList;
	}
	return listShowPage;
}

function data() {
	return {
		searchList: [],
		flagSearh: false,
		textSearch: '',
	};
}

export default {
  components: { AppSearch, AppButton, AppList, ListNotFound },
	name: 'List',
	data,
	created,
	computed: {
		...mapGetters([
			'list',
			'favorites',
		]),
		showList,
	},
	methods: {
		saveFavorite,
		goToFavorites,
		goToAll,
		showDetail,
		changeText,
	},
	watch: {
		showList: changeShow,
	},
};
</script>
<style lang="scss" scoped>
	.list {
		background-color: $medium-white;
		min-height: 100vh;
		padding: 35px 32px;

		&__content-card {
			margin: 40px 0 70px 0;
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