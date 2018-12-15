<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <snackbar/>
            <router-view
              v-on:jwtUpdated="$emit('jwtUpdated', $event)"
              v-on:logout="$emit('logout')"
            />
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import snackbar from "@/components/Snackbar";
export default {
  components: {
    snackbar
  }
};
</script>