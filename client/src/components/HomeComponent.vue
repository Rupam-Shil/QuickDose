<template>
	<section class="homepage">
		<div class="right-container"><MainSidebar /></div>
		<div class="left-container">
			<TopNavBar />
			<div class="main-area">
				<slot></slot>
			</div>
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
	isolation: isolate;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 80vh;
		background: var(--very-lght-blue);
		bottom: 0;
		left: 0;
		border-radius: 1rem 0 0 0;
		z-index: -1;
	}
}
.main-area {
	height: calc(100% - 3rem);
	padding: 2rem 1rem 0;
}
</style>
