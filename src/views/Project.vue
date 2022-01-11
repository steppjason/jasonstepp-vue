<template>
  <div class="content" v-if="project">
      <div class="project-title">
        <router-link title="Back to projects" class="back-link" to="/projects"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><g><path d="M84.93,4.66C77.69,1.66,69.75,0,61.44,0C44.48,0,29.11,6.88,18,18C12.34,23.65,7.77,30.42,4.66,37.95 C1.66,45.19,0,53.13,0,61.44c0,16.96,6.88,32.33,18,43.44c5.66,5.66,12.43,10.22,19.95,13.34c7.24,3,15.18,4.66,23.49,4.66 c8.31,0,16.25-1.66,23.49-4.66c7.53-3.12,14.29-7.68,19.95-13.34c5.66-5.66,10.22-12.43,13.34-19.95c3-7.24,4.66-15.18,4.66-23.49 c0-8.31-1.66-16.25-4.66-23.49c-3.12-7.53-7.68-14.29-13.34-19.95C99.22,12.34,92.46,7.77,84.93,4.66L84.93,4.66z M72.88,47.13 c2.48-2.52,2.45-6.58-0.08-9.05s-6.58-2.45-9.05,0.08L45.08,57.13c-2.45,2.5-2.45,6.49,0,8.98l18.32,18.62 c2.48,2.52,6.53,2.55,9.05,0.08c2.52-2.48,2.55-6.53,0.08-9.05l-13.9-14.13L72.88,47.13L72.88,47.13z M80.02,16.55 c5.93,2.46,11.28,6.07,15.76,10.55c4.48,4.48,8.09,9.83,10.55,15.76c2.37,5.71,3.67,11.99,3.67,18.58c0,6.59-1.31,12.86-3.67,18.58 c-2.46,5.93-6.07,11.28-10.55,15.76c-4.48,4.48-9.83,8.09-15.76,10.55C74.3,108.69,68.03,110,61.44,110s-12.86-1.31-18.58-3.67 c-5.93-2.46-11.28-6.07-15.76-10.55c-4.48-4.48-8.09-9.82-10.55-15.76c-2.37-5.71-3.67-11.99-3.67-18.58 c0-6.59,1.31-12.86,3.67-18.58c2.46-5.93,6.07-11.28,10.55-15.76c4.48-4.48,9.83-8.09,15.76-10.55c5.71-2.37,11.99-3.67,18.58-3.67 C68.03,12.88,74.3,14.19,80.02,16.55L80.02,16.55z"/></g></svg></router-link>
        <span>{{ project.title }}</span>
      </div>
      <transition name="image" appear>
        <div><img class="project-header-img" :src="require('@/assets/img/projects/' + project.url + '/' + project.fullimage)"/></div>
      </transition>
      
      <div v-if="project.link" class="project-link"><span>Link:</span> <a target="_blank" :href="project.link">{{ project.link }}</a></div>
      <div v-if="project.social" class="project-link"><span>Instagram:</span> <a target="_blank" :href="project.social">{{ project.social }}</a></div>

      <div class="project-full-text" v-html="project.fulltext"></div>

      <ul class="project-tools" v-if="project.tools">
        <li :key="tool.id" v-for="tool in project.tools">{{ tool }}</li>
      </ul>
      
      <h3 v-if="project.video || project.images">Media</h3>
      <transition name="image" appear>
        <div v-if="project.video" class="video-container">
          <iframe width="1280" height="720" :src="'https:\/\/www.youtube.com/embed/' + project.video" :title="project.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </transition>

      <transition name="image" appear>
        <div v-if="project.images" class="project-gallery">
          <div class="project-image" :key="image.id" v-for="image in project.images">
            <img @click="openLightbox(image)" :src="getImgUrl(image, project.url, true)"/>
          </div>
        </div>
      </transition>

      <div @click="closeLightbox" class="lightbox-fade" id="fade" ref="fade"></div>
      <div class="full-image" id="fullImage" ref="fullImage">
        <img v-if="fullImage" :src="getImgUrl(fullImage, project.url, false)"/>
      </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data(){
    return{
      fullImage: ''
    }
  },
  computed:{
      project(){
          return this.$store.getters.getProject(parseInt(this.$route.params.id))
      }
  },
  methods:{
      closeLightbox(){
          this.$refs.fullImage.classList.remove("full-image_open")
          this.$refs.fade.classList.remove("lightbox-fade_open")
      },
      openLightbox(image){
          this.fullImage = image

          this.$refs.fullImage.classList.add("full-image_open")
          this.$refs.fade.classList.add("lightbox-fade_open")
      },
      getImgUrl(image, project, thumb){
        if(thumb){
          return require('@/assets/img/projects/' + project + '/' + 'thumb_' + image)  
        }
        return require('@/assets/img/projects/' + project + '/' + image)
      }
  }
}
</script>
