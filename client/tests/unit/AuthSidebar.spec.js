import { shallowMount } from '@vue/test-utils';
import AuthSidebar from '@/components/AuthSidebar';

describe('AuthSidebar.vue', () => {
	it('testing for props passed', () => {
		const wrapper = shallowMount(AuthSidebar, {
			propsData: {
				heading: 'login',
			},
		});
		expect(wrapper.get('[data-test="heading"]').text()).toContain('login');
	});
});
