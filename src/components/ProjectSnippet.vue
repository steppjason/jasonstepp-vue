<template>
    <router-link :to="{ name: 'Project', params: { id: project.id, url: project.url } }">{{ project.title }}</router-link>
    <div class="project-snippet-thumbnail" :style="'background-image: url(' + require('@/assets/img/projects/' + project.url + '/' + project.fullimage) + ')'">
      <router-link :to="{ name: 'Project', params: { id: project.id, url: project.url } }"></router-link>
    </div>
    <p>{{ project.summary }}</p>
</template>

<script>
export default {
  name: "ProjectSnippet",
  props: {
    project: Object,
  }
}
</script>
