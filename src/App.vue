<template>
  <div id="app">
    <router-view v-on:jwtUpdated="$emit('jwtUpdated', $event)" v-on:logout="$emit('logout')"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
