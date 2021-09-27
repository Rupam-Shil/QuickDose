import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Topic from "../views/Topic.vue";

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/signup",
  },
  {
    path: "/topic",
    name: "Topic",
    component: Topic,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
