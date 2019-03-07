<template>
<div>
  <b-modal :title="title" ref="modal" @ok="save" @show="onShow">
    <b-form>
      <b-form-group label="Amount:" label-for="amount">
        <b-form-input v-model="amount" id="amount"></b-form-input>
      </b-form-group>
      <b-form-group label="Reason:" label-for="desc">
        <b-form-textarea v-model="reason" id="desc" />
      </b-form-group>
      <b-form-group label="Currency:" label-for="curr">
        <b-form-select v-model="currency" id="curr">
          <option v-for="curr in currencyList" v-bind:key="curr.code" v-bind:value="curr.code">
            {{ curr.humanReadableName }}
          </option>
        </b-form-select>
      </b-form-group>

    </b-form>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'NewDeposit',
  props: ['account', 'type'],
  methods: {
    show () {
      this.$refs.modal.show()
    },
    onShow () {
      this.amount = ''
      this.currency = ''
      this.reason = ''
    },
    save (evt) {
      evt.preventDefault()
      let req = {
        type: this.type,
        currency: {
          code: this.currency
        },
        amount: this.amount,
        reason: this.reason
      }
      this.$http.post('accounts/' + this.account + '/transactions', req).then(
        res => {
          this.hideMe()
          this.$emit('done')
        }
      )
    },
    hideMe () {
      this.$refs.modal.hide()
    },
    loadCurrencies () {
      this.$http.get('currencies').then(
        response => {
          this.showAlert = false
          this.currencyList = response.data
        },
        err => {
          this.showAlert = true
          this.errorText = err.data.message
        }
      )
    }
  },
  computed: {
    title () {
      if (this.type === 'deposit') {
        return 'Add deposit'
      }
      return 'Add withdrawal transaction'
    }
  },
  data () {
    return {
      amount: '',
      reason: '',
      currencyList: [],
      currency: ''
    }
  },
  created () {
    this.loadCurrencies()
  },
  watch: {
    '$route': 'loadCurrencies'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
