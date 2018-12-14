<template>
  <b-nav tabs>
    <router-link class="navbar-brand" to="/">Home Budget</router-link>
    <b-nav-item active>Home</b-nav-item>
    <b-nav-item>Currencies</b-nav-item>
    <b-btn class="ml-auto btn btn-outline-danger" @click="$emit('logout')">Logout</b-btn>
  </b-nav>
</template>

<script>
export default {
  name: 'menu-bar',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.navbar-brand {
  margin-left: 2rem;
  margin-right: 4rem;
}

</style>
