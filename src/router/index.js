import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Project from "@/views/Project.vue";
import Projects from "@/views/Projects.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
	},
	{
		path: "/:id/:url",
		name: "Project",
		component: Project,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById("app").scrollIntoView({ behavior: "smooth" });
	},
});

export default router;
