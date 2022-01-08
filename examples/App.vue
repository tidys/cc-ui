<template>
  <div id="app">
    <CCButton :color="red" @confirm="onClick">cc-button</CCButton>
    <CCButton>cc-button1111213231243214</CCButton>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {},
  setup(){
    return{
      onClick(){
        console.log('1111111111')
      }
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
