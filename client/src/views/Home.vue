<template>
	<section class="homepage">
		<div class="right-container"><MainSidebar /></div>
		<div class="left-container"></div>
	</section>
</template>

<script setup>
import MainSidebar from '../components/MainSidebar.vue';
</script>

<style lang="scss" scoped>
section.homepage {
	width: 100vw;
	height: 100vh;
	background: var(--white);
	display: grid;
	grid-template-columns: 20% auto;
}
</style>
