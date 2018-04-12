<template lang="pug">
.cookies__container(v-show="!cookiesAccepted")
  .container__inner
    p.cookies__message
      | Nós usamos cookies para prover uma melhor experiência e também para fins estatísticos. 
      | Você pode bloquear ajustando as configurações do seu browser. Caso você não bloqueie,
      | temos o consenso de usar e guardar na memória do seu dispositivo.
    button.button(type="button", @click="acceptCookies") Accept
    button.button.button--dark(type="button", @click="cookiesAccepted = true") Close
</template>

<script>
export default {
  data () {
    return {
      cookiesAccepted: true
    }
  },
  methods: {
    acceptCookies () {
      this.$cookie.set('cookiesAccepted', true)
      this.cookiesAccepted = true
    }
  },
  created () {
    if (process.BROWSER_BUILD) {
      this.cookiesAccepted = !!this.$cookie.get('cookiesAccepted')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.cookies__container
  position: fixed
  bottom: 0
  left: 0
  right: 0
  background: #fff
  padding: 10px 0

.cookies__message
  font-size: 16px
  display: inline-block
  margin: 0

  @media #{$medium-up}
    max-width: calc(100% - 180px)

.button
  padding: 8px 15px
  font-size: 16px
  float: right
  display: inline-block
  margin-top: 10px

.button--dark
  background: none
  color: $color-text
</style>
