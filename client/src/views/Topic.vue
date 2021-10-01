<template lang="">
  <div class="container">
    <div class="sidebar">
      <h1>Create account</h1>
      <p>
        Create your account in a few steps and start enjoying uninterrupted
        reading experience.
      </p>
      <img src="../assets/coffee.png" />
    </div>

    <div class="main-section">
      <div class="cont">
        <div class="heading">
          <h1>Choose Topics</h1>
          <p>Some topics you like to see in the news feed</p>
        </div>

        <label class="items"></label>
        <input type="checkbox" class="interests" />
        <span class="sp">International</span>

        <label class="items"></label>
        <input type="checkbox" class="interests" />
        <span class="sp">Business</span>

        <label class="items"></label>
        <input type="checkbox" class="interests" />
        <span class="sp">Entertainment</span>

        <label class="items"></label>
        <input type="checkbox" class="interests" />
        <span class="sp">Sports</span>

        <label class="items"></label>
        <input type="checkbox" class="interests" />
        <span class="sp">Health</span>
      </div>
      <a href="">Previous Page</a>
      <a href="" id="nxt">Next</a>
    </div>
  </div>

  <!-- Modal section -->
  <div class="bx">
    <div class="box">
      <img src="../assets/tick.svg" />
      <h2>All Done</h2>
      <p>Start with the latest news</p>
      <button>Continue</button>
    </div>
  </div>
</template>

<script setup>
// import { isSignedUp } from '@/composables/isAuthed.js';
// isSignedUp();
</script>

<style lang="scss" scoped>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bx {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 270px;
    height: 270px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px;
    img {
      width: 100px;
      height: 100px;
    }
    button {
      background-color: brown;
      display: inline-block;
      border-radius: 10px;
      border: 4px double #cccccc;
      color: #eeeeee;
      text-align: center;
      font-size: 20px;
      padding: 5px;
      width: 150px;
      transition: all 0.4s;
      margin: 10px;
    }
    button:hover {
      cursor: pointer;
      background-color: green;
    }
  }
}

.container {
  display: grid;
  grid-template-columns: 40% 60%;
  background: #fbfbfd;
}

.sidebar {
  flex-wrap: wrap;
  display: flex;
  background: #e2e6f2;
  height: 100vh;
  padding: 25px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 20px;
  p {
    padding: 20px;
    margin-top: -10px;
    font-size: 19px;
    font-weight: 500;
  }
}

.cont {
  display: grid;
  gap: 10px;
}
.main-section {
  display: grid;
  place-items: center;
  padding: 70px;
  text-align: center;

  .items {
    padding: 5px;
  }
}

.interests {
  display: none;
}

.sp {
  padding: 7px 14px;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
}

span:hover {
  background-color: #e2e6f2;
}

a {
  text-decoration: none;
  color: brown;
  font-weight: 700;
  font-size: 20px;
}
</style>
