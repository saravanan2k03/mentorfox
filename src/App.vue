<template>
<div class="">
  <Navbar></Navbar>
  <Works></Works>
  <!-- <course></course> -->
  <!-- <Hero></Hero>
  <SecondHero></SecondHero>
  <programme></programme>
  <LearnTech></LearnTech>
  <Footer></Footer> -->
</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import SecondHero from './components/SecondHero.vue'
import programme from '../src/components/programme.vue'
import LearnTech from '../src/components/Learntech.vue'
import Footer from '../src/components/Footer.vue'
import course from '../src/components/SingleCourse.vue'
import Works from '../src/components/ProgrammeWorks.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    SecondHero,
    programme,
    LearnTech,
    Footer,
    course,
    Works
  }
}
</script>

<style>

</style>
