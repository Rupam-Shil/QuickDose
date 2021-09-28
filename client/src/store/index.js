import { createStore } from 'vuex';

export default createStore({
	state: {
		userDetails: {},
	},
	mutations: {
		setUserDetails(state, payload) {
			state.userDetails = payload;
		},
	},
	actions: {},
	modules: {},
});
