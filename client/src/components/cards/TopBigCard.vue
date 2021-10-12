<template>
	<a
		:href="article.url"
		class="card"
		v-if="article !== undefined"
		target="blank"
	>
		<div class="card-left">
			<img :src="article.urlToImage" alt="" />
		</div>
		<div class="card-right">
			<p class="source">{{ article.source.name }}</p>
			<h3 class="title">
				{{ article.title }}
			</h3>
			<div class="content">
				{{ article.content }}
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
.card {
	text-decoration: none;
	color: #000;
	height: 15rem;
	flex: 1;
	background: white;
	box-shadow: 0 25px 25px -20px rgba(25, 45, 100, 0.15),
		0.5px 0px 2.2px rgba(0, 0, 0, 0.011), 1.1px 0px 5.3px rgba(0, 0, 0, 0.016),
		2.1px 0px 10px rgba(0, 0, 0, 0.02), 3.8px 0px 17.9px rgba(0, 0, 0, 0.024),
		7.1px 0px 33.4px rgba(0, 0, 0, 0.029), 17px 0px 80px rgba(0, 0, 0, 0.04);
	border-radius: 1rem;
	padding: 0.5rem;
	gap: 1rem;
	display: flex;
	overflow: hidden;
	&-left {
		width: 50%;
		height: 100%;
		background-color: var(--dark-blue);
		border-radius: inherit;
		flex-shrink: 0;
		img {
			width: 100%;
			height: 100%;
			border-radius: inherit;
		}
	}
	&-right {
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.source {
			color: var(--grey-text);
			font-weight: 600;
		}
		.title {
			font-weight: 600;
			font-size: 1.2rem;
			line-height: 120%;
		}
		.content {
			align-self: flex-end;
			height: 3rem;
			overflow: hidden;
			text-overflow: ellipsis;
			color: var(--grey-text);
			font-size: 0.9rem;
		}
	}
}
</style>
