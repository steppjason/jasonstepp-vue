<template>
  <div class="content" v-if="project">
      <h1> {{ project.title }} </h1>
      <div><img class="project-header-img" :src="require('@/assets/img/projects/' + project.url + '/' + project.fullimage)"/></div>
      <div class="project-full-text" v-html="project.fulltext"></div>
      
      <h3 v-if="project.video || project.images">Media</h3>
      <div v-if="project.video" class="video-container">
        <iframe width="1280" height="720" :src="'https:\/\/www.youtube.com/embed/' + project.video" :title="project.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div v-if="project.images" class="project-gallery">
        <div class="project-image" :key="image.id" v-for="image in project.images">
            <a :href="require('@/assets/img/projects/' + image)"><img :src="require('@/assets/img/projects/thumb_' + image)"/></a>
        </div>
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
