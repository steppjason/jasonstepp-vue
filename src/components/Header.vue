<template>
  <header>
    <h1 class="header-name"><span>Jason</span> Stepp</h1>
    <h2 class="header-subtitle">Full Stack Developer</h2>
    <Nav />
    <Email />
    <Socials />
  </header>
  <MobileNav />
</template>

<script>
import MobileNav from "@/components/Mobile-Nav.vue"
import Nav from "@/components/Nav.vue"
import Socials from "@/components/Socials.vue"
import Email from "@/components/Email.vue"

export default {
  name: "Header",
  components: {
    MobileNav,
    Nav,
    Socials,
    Email
  }
}
</script>
