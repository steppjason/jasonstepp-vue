<template>
  <div>
    <router-link :to="{ name: 'Project', params: { id: project.id, url: project.url } }"><h3>{{ project.title }}</h3></router-link>
    <div><img :src="require('@/assets/img/projects/' + project.thumbnail)" /></div>
    <p>{{ project.summary }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectSnippet",
  props: {
    project: Object,
  },
};
</script>
