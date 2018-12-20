<template>
  <v-toolbar>
    <v-toolbar-title>Home Budget</v-toolbar-title>
    <v-spacer></v-spacer>
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
    <div>
      <v-switch
        :input-value="darkTheme"
        @change="setTheme(!darkTheme)"
        hide-details
      ></v-switch>
    </div>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'menu-bar',
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      setTheme: 'theme/setTheme'
    }),
    logoutUser() {
      this.logout().then(() => { this.$router.push({ path: '/login' }) })
    }
  },
  computed: {
    ...mapGetters({
      darkTheme: 'theme/darkTheme'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
