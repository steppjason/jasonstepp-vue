<template>
    <router-link :to="{ name: 'Project', params: { id: project.id, url: project.url } }"><h3>{{ project.title }}</h3></router-link>
    
    <div class="project-snippet-thumbnail" :style="'background-image: url(' + require('@/assets/img/projects/' + project.url + '/' + project.fullimage) + ')'"></div>

    <!--<div><img :src="require('@/assets/img/projects/' + project.thumbnail)" /></div>-->
    <p>{{ project.summary }}</p>
</template>

<script>
export default {
  name: "ProjectSnippet",
  props: {
    project: Object,
  },
}
</script>
