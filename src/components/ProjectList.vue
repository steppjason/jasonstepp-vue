<template>
  <div class="project-snippet" :key="project.id" v-for="project in projects">
    <ProjectSnippet :project="project" />
  </div>
</template>

<script>
import ProjectSnippet from "@/components/ProjectSnippet.vue"

export default {
  name: "ProjectList",
  components: {
    ProjectSnippet,
  },
  props: {
    projects: Array,
  },
}
</script>
