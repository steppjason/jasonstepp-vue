<template>
  <footer class="site-footer">
    <p class="made-with">Made with <span>🌵</span></p>
    <p>&copy; {{ copyright }} </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed:{
    copyright(){
      return new Date().getFullYear()
    }
  }
}
</script>
