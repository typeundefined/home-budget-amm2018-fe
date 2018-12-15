<template>
  <v-toolbar>
    <v-toolbar-title>Home Budget</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat >Home</v-btn>
      <v-btn flat >Currencies</v-btn>
      <v-btn flat  color="red" @click="$emit('logout')">Logout</v-btn>
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar-title>

        <v-list>
          <router-link :to="{name: 'New Account'}" tag="v-list-tile">
            <span>New Account</span>
          </router-link>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "menu-bar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
