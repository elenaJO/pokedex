import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store(
	{
		state: {
			list: [],
			favorites: [],
		},
		getters: {
			list(state) {
				return state.list
			},
			favorites(state) {
				return state.favorites
			},
		},
		actions: {
			async getListPok(context) {
				const url = 'https://pokeapi.co/api/v2/pokemon';
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
		},
		mutations: {
			setList(state, items) {
				const itemsNew = items.map((i) => {
					const newItem = { ...i };
					newItem.favorite = false;
					return newItem;
				});
				state.list = itemsNew;
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
			}
		}
	},
);

export default store;