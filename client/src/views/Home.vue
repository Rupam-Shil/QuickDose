<template>
	<div>
		<Home>
			<div class="bigcard-section">
				<Bigcard
					v-for="(article, index) in articles.splice(0, 2)"
					:key="index"
					:article="article"
				/>
				<Bigcard />
			</div>
		</Home>
	</div>
</template>

<script setup>
import Bigcard from '../components/cards/TopBigCard.vue';
import Home from '../components/HomeComponent.vue';
import { receiveDataGet } from '../composables/fromAxios';
import { ref, onMounted } from 'vue';

//data
const articles = ref([]);

const fetchNews = async (uri) => {
	const re = await receiveDataGet(uri);
	articles.value = re.articles;
	articles.value = filterNews(articles.value);
};

const filterNews = (arr) => {
	return arr.filter((el) => {
		return el.content !== null && el.urlToImage !== null;
	});
};
fetchNews('http://localhost:5000/news/topnews');
</script>

<style lang="scss" scoped>
.bigcard-section {
	width: 100%;
	display: flex;
	gap: 2rem;
}
</style>
