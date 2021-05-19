import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store(
	{
		state: {
			list: [],
			favorites: [],
			detail: {},
			loading: false,
		},
		getters: {
			list(state) {
				return state.list
			},
			favorites(state) {
				return state.favorites
			},
			detail(state) {
				return state.detail
			},
			loading(state) {
				return state.loading
			}
		},
		actions: {
			async getListPok(context) {
				const url = 'https://pokeapi.co/api/v2/pokemon';
				context.commit('setLoading', true);
				const resp = await fetch(url);
				const data = await resp.json();
				context.commit('setList', data.results);
			},
			getPokFavorite(context, index) {
				context.commit('setPokFav', index);
			},
			getPokDeleteFavorite(context, index) {
				context.commit('setPokDeleteFav', index);
			},
			async getDetailPok(context, { name, favorite }) {
				context.commit('setLoading', true);
				const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
				const resp = await fetch(url);
				const data = await resp.json();
				context.commit('setDetailPok', { data, favorite });
			},
			resetDetail(context) {
				context.commit('setLoading', false);
				context.commit('setResetDetail');
			},
		},
		mutations: {
			setList(state, items) {
				const itemsNew = items.map((i) => {
					const newItem = { ...i };
					if (state.favorites.length) {
						const indexF = state.favorites.findIndex(f => f.name === i.name);
						newItem.favorite = indexF > -1;
					} else {
						newItem.favorite = false;
					}
					return newItem;
				});
				state.list = itemsNew;
				state.loading = false;
				// setTimeout(() => {
				// 	state.loading = false;
				// }, 3000);
			},
			setPokFav(state, index) {
				state.list[index].favorite = !state.list[index].favorite;
				if (state.list[index].favorite) {
					state.favorites.push(state.list[index]);
				} else {
					const indexDelete = state.favorites.findIndex(f => f.name === state.list[index].name);
					state.favorites.splice(indexDelete, 1);
				}
			},
			setPokDeleteFav(state, index) {
				const namePok = state.favorites[index].name;
				state.favorites.splice(index, 1);
				const indexD = state.list.findIndex(f => f.name === namePok);
				state.list[indexD].favorite = !state.list[indexD].favorite;
			},
			setDetailPok(state, { data, favorite }) {
				state.detail = { ... data };
				state.detail.favorite = Boolean(favorite);
				state.detail.image = data.sprites.front_default;
				state.detail.typesString = data.types.map(t => t.type.name).toString();
				state.detail.statsString = data.stats.map(t => t.stat.name).toString();
				//Para mostrar el efecto del loading
				setTimeout(() => {
					state.loading = false;
				}, 1000);
			},
			setResetDetail(state) {
				state.detail = {};
			},
			setLoading(state, value) {
				state.loading = value;
			}
		}
	},
);

export default store;