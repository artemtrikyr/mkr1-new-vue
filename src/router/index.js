import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  
  {
    path: "/partslist",
    name: "partslist",
    component: () =>
      import(/* webpackChunkName: "partslist" */ "../views/PartsList.vue"),
  },
  {
    path: "/partslist/:name",
    name: "partdetail",
    component: () =>
      import(/* webpackChunkName: "partdetail" */ "../views/PartDetail.vue"),
  }
  

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
