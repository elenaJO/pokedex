import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store(
	{
		state: {
			title: 'Hola',
			list: [
				{
					id: 1,
					name: 'pikachu',
				},
				{
					id: 2,
					name: 'pikachu',
				},
			],
			favotites: [],
		},
		getters: {
			list(state) {
				return state.list
			},
		},
		actions: {
			async getListPok(context) {
				const url = 'https://pokeapi.co/api/v2/pokemon';
				const resp = await fetch(url);
				const data = await resp.json();
				context.commit('setList', data.results);
			},
		},
		mutations: {
			setList(state, items) {
				Vue.set(state, 'list', items);
			}
		}
	},
);

export default store;