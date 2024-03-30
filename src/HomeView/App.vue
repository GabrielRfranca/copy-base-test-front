<template>
  <!-- <img alt="CopyBase logo" src="../assets/copybase_logo.jpg"> -->
  <SpreadSheetInput></SpreadSheetInput>
  <ChartD3 v-if="$store.state.success" ref="chart"></ChartD3>
</template>

<script>
import ChartD3 from '../HomeComponents/Chart.vue'
import SpreadSheetInput from '../HomeComponents/SpreadSheetInput.vue';

export default {
  name: 'App',
  components: {
    ChartD3,
    SpreadSheetInput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
