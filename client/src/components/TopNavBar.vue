<template>
  <div class="navbar">
    <div class="greetings">
      <img :src="require(`@/assets/${period}.svg`)" :alt="period" />
      <h1>
        Good <span>{{ period }}</span>
      </h1>
      ,
      <p>{{ userDetails.name }}</p>
    </div>
    <div class="searchbar">
      <input
        class="sb"
        type="text"
        placeholder="Search for an article..."
        v-model="searchValue"
      />
      <button id="icon" class="uil uil-search" @click="fetchData"></button>
      <div class="dropdown" v-if="isDropdown">
        <a
          v-for="(data, index) in searchedDatas"
          :key="index"
          :href="data.url"
          target="blank"
          >{{ data.title }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";

//data
const store = useStore();
const searchValue = ref("");
const period = ref("morning");
const searchedDatas = ref([]);
const isDropdown = ref(false);

const userDetails = computed(() => store.state.userDetails);

const fetchData = async () => {
  if (searchValue.value !== "" || searchValue.value !== null) {
    const res = await axios.post("http://localhost:5000/news/searchnews", {
      q: searchValue.value,
    });
    isDropdown.value = true;
    searchedDatas.value = res.data;
  } else {
    return;
  }
};

const getPeriod = () => {
  const hour = format(new Date(), "HH");
  if (hour > 20 || hour < 5) {
    period.value = "night";
  } else if (hour >= 5 && hour <= 11) {
    period.value = "morning";
  } else if (hour >= 12 && hour <= 16) {
    period.value = "afternoon";
  } else {
    period.value = "evening";
  }
};
getPeriod();
</script>

<style lang="scss" scoped>
.searchbar {
  display: flex;
  position: relative;
  isolation: isolate;
  .sb {
    border-radius: 50px;
    padding: 10px;
    height: 2.5rem;
    width: 500px;
    border: 1px solid black;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border: none;
    color: black;
    font-weight: 600;
    font-size: 16px;
    opacity: 70%;
  }
  input:focus {
    outline: none;
    border: none;
  }
  #icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 100%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border: none;
    height: 40px;
    width: 40px;
    background-color: white;
  }
  #icon:hover {
    cursor: pointer;
  }
}
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
.dropdown {
  position: absolute;
  z-index: 100000;
  width: 100%;
  overflow-y: scroll;
  height: max-content;
  max-height: 20rem;
  background: #dae2ec;
  color: black;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  bottom: 0;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
