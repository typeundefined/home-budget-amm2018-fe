<template>
  <vue-datepicker-local v-model="time"/>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  components: {
    DatePicker
  },
  data () {
    return {
      time: new Date()
    }
  }
}
</script>
