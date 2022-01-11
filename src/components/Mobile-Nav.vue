<template>
    <div v-on:click="openMenu" class="mobile-nav-icon">
        <svg class="icon mobile-menu-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
    </div>
    <div v-on:click="closeMenu" class="mobile-nav-fade" id="fade" ref="fade"></div>
    <div class="mobile-nav" id="menu" ref="menu">
        <div v-on:click="closeMenu" class="close-icon">
            <div><svg class="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg></div>
        </div>
        <Nav />
        <Email />
        <Socials />
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import Socials from "@/components/Socials.vue"
import Email from "@/components/Email.vue"

export default {
  name: "MobileNav",
  components: {
    Nav,
    Socials,
    Email
  },
  methods:{
      closeMenu(){
          this.$refs.menu.classList.remove("open")
          this.$refs.fade.classList.remove("mobile-nav-fade_open")
      },
      openMenu(){
          this.$refs.menu.classList.add("open")
          this.$refs.fade.classList.add("mobile-nav-fade_open")
      }
  }
}
</script>