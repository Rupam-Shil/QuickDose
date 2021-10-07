<template>
	<div>
		<div class="isMobile" v-if="isMobile">
			<div class="isMobile-text">
				Sorry 😢!! Our website is only available on big screens
			</div>
		</div>
		<router-view v-else />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { checkSessions } from './composables/checkSession.js';

checkSessions();

const isMobile = ref(false);
const width = window.innerWidth;

window.addEventListener('resize', () => {
	checkInMobile();
});

const checkInMobile = () => {
	if (window.innerWidth < 768) {
		isMobile.value = true;
	} else {
		isMobile.value = false;
	}
};
checkInMobile();
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--bg-color: #e1e1e1;
	--white: #ffffff;
	--blue-text: #dde7f8;
	--blue-gradient: linear-gradient(
		200deg,
		hsl(216, 71%, 65%) 50%,
		hsl(217, 67%, 54%) 90%
	);
	--blue-gradient-mobile: linear-gradient(
		90deg,
		hsl(216, 71%, 65%) 10%,
		hsl(217, 67%, 54%) 90%
	);
	--light-blue: #5890eb;
	--grey-text: #686c73;
	--black-text: #000;
	--warning: #fe5157;
	--very-lght-blue: #e3ebf6;
	--light-gray-bg: #f8f8fa;
	--lime-green: #30c862;
	--dark-blue: #0062ff;
}
body {
	font-family: 'Poppins', sans-serif;
	background: var(--bg-color);
}
.isMobile {
	position: fixed;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: var(--blue-gradient-mobile);
}
.isMobile-text {
	font-size: 2rem;
	color: #fff;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	font-weight: 500;
}
</style>
