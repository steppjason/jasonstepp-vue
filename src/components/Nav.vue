<template>
    <nav>
      <ul>
        <li><router-link v-on:click="closeMenu" to="/">Home</router-link></li>
        <li><router-link v-on:click="closeMenu" to="/projects">Projects</router-link></li>
        <li><router-link v-on:click="closeMenu" to="/about">About</router-link></li>
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
          this.$parent.$refs.menu.classList.remove("open")
      }
  }
}
</script>