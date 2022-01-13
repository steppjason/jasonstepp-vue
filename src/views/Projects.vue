<template>
	<div class="content">
		<ProjectList :projects="projects" />
	</div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";

export default {
	name: "Projects",
	components: {
		ProjectList,
	},
	data() {
		return {
			projects: [],
		};
	},
	created() {
		this.projects = this.$store.getters.getProjects;
	},
};
</script>
