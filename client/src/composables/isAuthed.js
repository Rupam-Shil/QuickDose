import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { isEmpty } from 'lodash';

export const isSignedUp = () => {
	const store = useStore();
	const userDetails = computed(() => store.state.userDetails);
	const router = useRouter();
	if (isEmpty(userDetails.value)) {
		router.push('/signup');
	} else {
		return;
	}
};
