<template>
  <div v-if="project">
      <h1> {{ project.title }} </h1>
      <div><img :src="require('@/assets/img/projects/' + project.fullimage)" /></div>
      <div v-html="project.fulltext"></div>
      <div :key="image.id" v-for="image in project.images">
          <a :href="require('@/assets/img/projects/' + image)"><img :src="require('@/assets/img/projects/thumb_' + image)" /></a>
      </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  computed:{
      project(){
          return this.$store.getters.getProject(parseInt(this.$route.params.id))
      }
  }
}
</script>
