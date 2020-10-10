import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		// 路线级别代码分隔
		// 这会为该路由生成一个单独的块(about.[hash].js)
		// 当路由被访问时延迟加载。
		component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue"),
	},
	{
		path: "/user",
		name: "User",
		component: () => import("../views/user/index.vue"),
		children: [
			{
				path: "",
				component: () => import("../views/user/home.vue"),
			},
			{
				path: "info",
				name: "UserInfo",
				component: () => import("../views/user/info.vue"),
			},
			{
				path: "pwd",
				name: "UserPwd",
				component: () => import("../views/user/pwd.vue"),
			},
			{
				path: "(.*)",
				redirect: "/user",
			},
		],
	},
	{
		path: "/editor",
		name: "Editor",
		component: () => import("../views/editor/index.vue"),
		children: [
			{
				path: "",
				component: () => import("../views/editor/home.vue"),
			},
			{
				path: "info",
				name: "EditorInfo",
				component: () => import("../views/editor/info.vue"),
			},
			{
				path: "pwd",
				name: "EditorPwd",
				component: () => import("../views/editor/pwd.vue"),
			},
			{
				path: "(.*)",
				redirect: "/editor",
			},
		],
	},
	{
		path: "/(.*)",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

let token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "{}") : undefined;

const AUTH_PATH: {
	[key: string]: string[] | string;
} = {
	user: ["", "user"],
	editor: ["", "editor"],
	admin: "all",
};

router.beforeEach((to, from, next) => {
	console.log(to, from);
	console.log(token);
	if (to.name === "Login") {
		next();
		return false;
	}
	if (!token) {
		if (localStorage.getItem("token")) {
			token = JSON.parse(localStorage.getItem("token") || "{}");
		} else {
			alert("未登录");
			next({ name: "Login" });
			return false;
		}
	} else {
		if (!localStorage.getItem("token")) {
			alert("未登录");
			next({ name: "Login" });
			token = undefined;
			return false;
		}
	}
	const { auth, uid } = token;
	const pathAuth = to.path.split("/")[1];
	if (AUTH_PATH[auth].includes(pathAuth) || AUTH_PATH[auth] === "all") {
		next();
		return false;
	} else {
		alert("无权限访问");
		next(from);
		return false;
	}
});

export default router;
