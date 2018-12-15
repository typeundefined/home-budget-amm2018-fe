<template>
  <v-app :dark="darkTheme">
    <v-content>
      <snackbar/>
      <router-view v-on:jwtUpdated="$emit('jwtUpdated', $event)" v-on:logout="$emit('logout')"/>
    </v-content>
    <v-footer height="auto">
      <v-container fluid>
        <v-switch label="Dark Theme" v-model="darkTheme"></v-switch>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import snackbar from "@/components/Snackbar";
export default {
  data() {
    return {
      darkTheme: true
    };
  },
  components: {
    snackbar
  }
};
</script>