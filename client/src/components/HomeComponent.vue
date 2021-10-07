<template>
	<section class="homepage">
		<div class="right-container"><MainSidebar /></div>
		<div class="left-container">
			<TopNavBar />
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
import MainSidebar from '../components/MainSidebar.vue';
import TopNavBar from '../components/TopNavBar.vue';
</script>

<style lang="scss" scoped>
section.homepage {
	width: 100vw;
	height: 100vh;
	background: var(--white);
	display: grid;
	grid-template-columns: 18rem auto;
}
.left-container {
	padding: 2rem;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 70vh;
		background: var(--very-lght-blue);
		bottom: 0;
		left: 0;
		border-radius: 1rem 0 0 0;
	}
}
</style>
