<template>
    <nav>
      <ul>
        <li><router-link v-on:click="closeMenu" to="/">Home</router-link></li>
        <li><router-link v-on:click="closeMenu" to="/projects">Projects</router-link></li>
        <li><router-link v-on:click="closeMenu" to="/about">About</router-link></li>
        <li><router-link v-on:click="closeMenu" to="/contact">Contact</router-link></li>
      </ul>
    </nav>
</template>

<script>

export default {
  name: "Nav",
  components: {
  },
  methods:{
      closeMenu(){
          if(this.$parent.$refs.menu != null){
              this.$parent.$refs.menu.classList.remove("open")
              this.$parent.$refs.fade.classList.remove("mobile-nav-fade_open")
          }
            
      }
  }
}
</script>