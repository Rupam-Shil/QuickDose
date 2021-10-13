<template>
	<a :href="article.url" target="blank" class="middle-card">
		<div class="left-side">
			<img :src="article.urlToImage" :alt="article.urlToImage" />
		</div>
		<div class="right-side">
			<div class="source">{{ article.source.name }}</div>
			<div class="title">
				{{ article.title }}
			</div>
		</div>
	</a>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	article: {},
});

const { article } = toRefs(props);
</script>

<style lang="scss" scoped>
.middle-card {
	display: flex;
	background: var(--white);
	flex: 1;
	text-decoration: none;
	color: #000;
	height: 7rem;
	border-radius: 1rem;
	box-shadow: 0 25px 25px -20px rgba(25, 45, 100, 0.15),
		0.5px 0px 2.2px rgba(0, 0, 0, 0.011), 1.1px 0px 5.3px rgba(0, 0, 0, 0.016),
		2.1px 0px 10px rgba(0, 0, 0, 0.02), 3.8px 0px 17.9px rgba(0, 0, 0, 0.024),
		7.1px 0px 33.4px rgba(0, 0, 0, 0.029), 17px 0px 80px rgba(0, 0, 0, 0.04);
	padding: 0.5rem;
	gap: 1rem;
	.left-side {
		height: 100%;
		width: 30%;
		flex-shrink: 0;
		background: red;
		border-radius: inherit;
		img {
			border-radius: inherit;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	.right-side {
		.source {
			color: var(--grey-text);
			font-weight: 600;
			margin-bottom: 0.5rem;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1; /* number of lines to show */
			-webkit-box-orient: vertical;
		}
		.title {
			line-height: 100%;
			font-weight: 600;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3; /* number of lines to show */
			-webkit-box-orient: vertical;
		}
	}
}
</style>
