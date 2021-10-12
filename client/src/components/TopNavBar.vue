<template>
	<div class="navbar">
		<div class="greetings">
			<img :src="require(`@/assets/${period}.svg`)" :alt="period" />
			<h1>
				Good <span>{{ period }}</span>
			</h1>
			,
			<p>{{ userDetails.name.split(' ')[0] }}</p>
		</div>
		<div class="searchbar"></div>
	</div>
</template>

<script setup>
import { format } from 'date-fns';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const userDetails = computed(() => store.state.userDetails);

const period = ref('morning');

const getPeriod = () => {
	const hour = format(new Date(), 'HH');
	if (hour > 20 || hour < 5) {
		period.value = 'night';
	} else if (hour >= 5 && hour <= 11) {
		period.value = 'morning';
	} else if (hour >= 12 && hour <= 16) {
		period.value = 'afternoon';
	} else {
		period.value = 'evening';
	}
};
getPeriod();
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
}
.greetings {
	height: 100%;
	display: flex;
	align-items: center;
	img {
		aspect-ratio: 1;
		height: 3rem;
		margin-right: 0.5rem;
	}
	h1 {
		font-weight: 600;
	}
	p {
		font-size: 1.4rem;
		color: var(--grey-text);
		margin-left: 0.2rem;
		text-transform: capitalize;
	}
}
</style>
