<template>
<b-container fluid class="full-section">
  <b-container id="NavSection" class="nav-class">
    <b-row>
      <b-col cols="2" class="">
      </b-col>
      <b-col cols="8" align-self="end" class="header-child">
          <h1>Sample VueJS Typescript App</h1>
      </b-col>
      <b-col cols="2" class="header-child">
      </b-col>
    </b-row>
  </b-container>
</b-container>
</template>
<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
  })
  export default class HeaderSection extends Vue {
  }
</script>