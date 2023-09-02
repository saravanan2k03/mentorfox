<template>
<div class="bg-bodycolor">
  <Navbar></Navbar>
  <Hero></Hero>
  <SecondHero></SecondHero>
  <programme></programme>
  <LearnTech></LearnTech>
  <Footer></Footer>
</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import SecondHero from './components/SecondHero.vue'
import programme from '../src/components/programme.vue'
import LearnTech from '../src/components/Learntech.vue'
import Footer from '../src/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    SecondHero,
    programme,
    LearnTech,
    Footer,
  }
}
</script>

<style>

</style>
