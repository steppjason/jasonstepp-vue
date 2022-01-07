<template>
  <footer>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <p>Made with 🌵</p>
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
