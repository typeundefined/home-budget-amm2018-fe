<template>
  <v-toolbar>
    <v-toolbar-title>Home Budget</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        :to="'/'"
      >Home</v-btn>
      <v-btn
        flat
        :to="'/currencies'"
      >Currencies</v-btn>
      <v-btn
        flat
        color="red"
        @click="logoutUser"
      >Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'menu-bar',
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    logoutUser() {
      this.logout().then(() => { this.$router.push({ path: '/login' }) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
