<template>
  <v-app :dark="darkTheme">
    <v-content>
      <menu-bar v-on:logout="$emit('logout')"/>
      <snackbar/>
      <router-view v-on:jwtUpdated="$emit('jwtUpdated', $event)" v-on:logout="$emit('logout')"/>
    </v-content>
  </v-app>
</template>

<script>
import snackbar from '@/components/Snackbar'
import MenuBar from '@/components/MenuBar'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  components: {
    snackbar: snackbar,
    'menu-bar': MenuBar
  },
  computed: {
    ...mapGetters({
      darkTheme: 'theme/darkTheme'
    })
  }
}
</script>
