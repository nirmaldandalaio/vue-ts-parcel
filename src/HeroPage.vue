<template>
  <b-container fluid>
    <HeaderSection/>
    <FooterSection/>
  </b-container>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import HeaderSection from './components/HeaderSection.vue'
  import FooterSection from './components/FooterSection.vue'

  @Component({
    components: {
      HeaderSection,
      FooterSection
    }
  })
  export default class HeroPage extends Vue {
  }
</script>


