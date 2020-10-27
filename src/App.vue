<template>
  <div id="app" class="app">
    main page
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component({
      components: {
      }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
  .app {
    background: red;
    color: white;
  }
</style>
