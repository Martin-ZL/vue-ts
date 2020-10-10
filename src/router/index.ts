import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// 路线级别代码分隔
		// 这会为该路由生成一个单独的块(about.[hash].js)
    // 当路由被访问时延迟加载。
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
