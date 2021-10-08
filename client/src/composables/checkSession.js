import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const checkSessions = () => {
	const store = useStore();
	const router = useRouter();
	let user = sessionStorage.getItem('userDetails');
	if (user) {
		user = JSON.parse(user);
		store.commit('setUserDetails', user);
		router.push(`/home`);
	}
};

export const setSession = (data) => {
	sessionStorage.setItem('userDetails', JSON.stringify(data));
};
