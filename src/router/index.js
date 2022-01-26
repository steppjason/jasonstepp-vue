import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Project from "@/views/Project.vue";
import Projects from "@/views/Projects.vue";
import Resume from "@/views/Resume.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: 'Jason Stepp - Full Stack Developer',
			metaTags: [
				{
					name: 'description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				},
				{
					name: 'og:description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				}
			]
		}
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
		meta: {
			title: 'Jason Stepp - Full Stack Developer | Projects',
			metaTags: [
				{
					name: 'description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				},
				{
					name: 'og:description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				}
			]
		}
	},
	{
		path: "/:id/:url",
		name: "Project",
		component: Project,
		meta: {
			title: 'Jason Stepp - Full Stack Developer',
			metaTags: [
				{
					name: 'description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				},
				{
					name: 'og:description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				}
			]
		}
	},
	{
		path: "/about",
		name: "About",
		component: About,
		meta: {
			title: 'Jason Stepp - Full Stack Developer | About',
			metaTags: [
				{
					name: 'description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				},
				{
					name: 'og:description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				}
			]
		}
	},
	{
		path: "/resume",
		name: "Resume",
		component: Resume,
		meta: {
			title: 'Jason Stepp - Full Stack Developer | Resume',
			metaTags: [
				{
					name: 'description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				},
				{
					name: 'og:description',
					content: 'A full stack developer with 8 years of experience with proven success creating online retail websites.'
				}
			]
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById("app").scrollIntoView({ behavior: "smooth" });
	},
});


router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if(nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if(previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if(!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags.map(tagDef => {
		const tag = document.createElement('meta');

		Object.keys(tagDef).forEach(key => {
		tag.setAttribute(key, tagDef[key]);
		});

		// We use this to track which meta tags we create so we don't interfere with other ones.
		tag.setAttribute('data-vue-router-controlled', '');

		return tag;
	})
	// Add the meta tags to the document head.
	.forEach(tag => document.head.appendChild(tag));

	next();
});


export default router;
