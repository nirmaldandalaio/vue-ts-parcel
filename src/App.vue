<template>
  <b-container class="mother-container" fluid>
    <notifications group="foo" />
    <router-view />
  </b-container>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class App extends Vue {}

</script>


