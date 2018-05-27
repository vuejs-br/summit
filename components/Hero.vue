<template lang="pug">
  .hero-banner
    .hero-banner__content
      img(src="../assets/vueconf.png", style="max-width: 350px; margin-bottom: 30px")
      h2.hero-banner__subheader
        strong Espaço Paraíso - 480 {{ $t('home.hero.participants') }}
        br
        | São Paulo, {{ $t('home.hero.country') }} • 31/08 e 01/09, 2018
      h2.hero-banner__subheader.hero-banner__subheader--last
        | {{ $t('home.hero.description') }}
      //- h2.hero-banner__subheader.hero-banner__subheader--last
      a.post-section__button.button.post-section__first-button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915", target="_BLANK")
        | {{ $t('home.hero.button1') }}
      br
      | {{ $t('home.hero.obs') }}
</template>

<script>
// import LogoType from './LogoType.vue'

export default {
  // components: { LogoType },
  methods: {
    trackTicketsEvent (event) {
      gtag('send', 'event', {
        eventAction: 'click',
        eventLabel: event.target.href,
        eventCategory: 'Tickets link - hero',
        transport: 'beacon'
      })
      _pq.push(['track', 'GoToTickets'])
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.hero-banner
  text-align: center
  position: relative
  transform: translateZ(0)

  @media #{$medium-up}
    background-size: contain
    background-position: center

  @media only screen and (min-width: 1900px)
    background-size: cover


.post-section__first-button
  margin-right: 0

  @media #{$medium-up}
    margin-right: 10px

.hero-banner__content
  padding-top: 100px

  // @media #{$large-up}
  //   padding-top: 480px
  //
  // @media #{$xlarge-up}
  //   padding-top: 520px

.hero-banner__image
  display: block
  margin: auto
  width: 167px

.hero-banner__header
  font-family: $font
  font-size: 40px
  color: $color-white
  font-weight: 300
  display: inline-block
  position: relative
  margin:
    top: 0
    bottom: 5px

  @media #{$medium-up}
    font-size: 62px

  @media #{$large-up}
    font-size: 82px

  .hero-banner__header__place
    color: $color-green--dark
    font-size: 28px
    position: absolute
    bottom: -15px
    right: 15px

.hero-banner__subheader
  font-family: $font
  font-size: 18px
  color: $color-text
  font-weight: 300
  letter-spacing: 1pt
  text-transform: uppercase
  margin-top: 0

  &--last
    margin-top: 45px
    text-transform: none

  @media #{$medium-up}
    font-size: 22px

  @media #{$large-up}
    font-size: 26px
</style>
