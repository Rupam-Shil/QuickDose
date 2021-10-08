<template>
  <AuthLayout>
    <AuthSidebar
      :heading="pageDeatils.heading"
      :subheading="pageDeatils.subheading"
      :linkText="pageDeatils.linkText"
      :linkTo="pageDeatils.linkTo"
      :linkToText="pageDeatils.linkToText"
    />
    <div class="login-main">
      <div class="lgn-top">
        <h1>Welcome back :)</h1>
        <p class="uil uil-bell">
          To keep connected with us please login with your personal information
          by email address and password.
        </p>
        <label class="uil uil-envelope">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label class="il uil-lock">Password:</label>
        <input type="password" id="pwd" name="pwd" minlength="8" /><br /><br />
      </div>
      <div class="lgn-mid">
        <input type="checkbox" id="remember-me" name="rem-me" />
        <label class="remember">Remember me</label>
        <a href="">Forgot password?</a>
      </div>
      <div class="lgn-btm">
        <button class="lgn-btn">Login Now</button>
        <router-link :to="{ path: 'SignUp' }">
          <button class="cr-btn">Create Account</button>
        </router-link>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from "../layouts/AuthLayout.vue";
import AuthSidebar from "../components/AuthSidebar.vue";

const pageDeatils = {
  heading: "Login",
  subheading:
    "Welcome back! Please Login to grab news specially brewing up for you",
  linkText: "Dont't Have An Account?",
  linkTo: "/signup",
  linkToText: "Sign Up",
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.login-main {
  border: 1px black solid;
  border-radius: 20px;
  // max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5em;

  .lgn-top {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .lgn-mid {
    display: flex;
    align-items: space-between;
  }
}

button {
  text-decoration: none;
  border: 1px solid black;
  border-radius: 20px;
  height: 40px;
  width: 100px;
  box-shadow: 1px 1px grey;
}
.lgn-btn {
  border: none;
  background-color: #5d92e2;
  color: #fff;
}
.cr-btn {
  background-color: white;
}
</style>
