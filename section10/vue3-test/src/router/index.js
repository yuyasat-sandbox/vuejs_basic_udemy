import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChildrenView from "../views/ChildrenView.vue";
import TeleportTest from "../views/TeleportTest.vue";
import CompositionTest from "../views/CompositionTest.vue";
import PropsEmitTest from "../views/PropsEmitTest.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/children",
    name: "children",
    component: ChildrenView,
  },
  {
    path: "/teleport-test",
    name: "teleport-test",
    component: TeleportTest,
  },
  {
    path: "/composition-test",
    name: "composition-test",
    component: CompositionTest,
  },
  {
    path: "/props-emit-test",
    name: "props-emit-test",
    component: PropsEmitTest,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
