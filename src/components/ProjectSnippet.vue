<template>
	<router-link :to="{ name: 'Project', params: { id: project.id, url: project.url } }">{{ project.title }}</router-link>

	<transition name="image" appear>
		<div class="project-snippet-thumbnail" :style="'background-image: url(' + require('@/assets/img/projects/' + project.url + '/' + project.fullimage) + ')' ">
			<router-link :to="{ name: 'Project', params: { id: project.id, url: project.url } }"></router-link>
		</div>
	</transition>

	<div class="project-summary">
		<div v-html="getSummary()"></div>
		<ul class="project-tools" v-if="project.tools">
			<li :key="tool.id" v-for="tool in project.tools">{{ tool }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "ProjectSnippet",
	props: {
		project: Object,
	},
	methods: {
		getSummary() {
			return this.project.summary;
		},
	},
};
</script>
