<template lang="pug">
.section.sponsors-section.center
  .container__inner
    h1 {{ $t('home.sponsors.title1') }}
    .sponsors__container
      .div.partner__image
        a(href="http://stored.com.br/", target="_BLANK")
          img.partner__image(src="~assets/img/stored.png")
      .div.partner__image
        a(href="http://jardim.in/", target="_BLANK")
          img.partner__image(src="~assets/img/jd.png")
      .div.partner__image
        a(href="https://www.revelo.com.br/", target="_BLANK")
          img.partner__image(src="~assets/img/revelo.png")

    p("v-html"="$t('home.sponsors.description1')")
    a.button(href="mailto:vuejssummit@gmail.com") {{ $t('home.sponsors.button1') }}

    h2 {{ $t('home.sponsors.title2') }}
    .sponsors__container
      div
        a(href="https://www.meetup.com/VueJS-SP/", target="_BLANK")
          img.partner__image(src="~assets/img/vuejssp.jpeg", title="1452 membros")
        a(href="https://www.meetup.com/campinas-frontend/", target="_BLANK")
          img.partner__image(src="~assets/img/front-campinas.jpeg", title="1647 membros")
        a(href="https://www.meetup.com/gdgcampinas/", target="_BLANK")
          img.partner__image(src="~assets/img/gdg-campinas.svg", title="2961 membros")
        a(href="https://www.meetup.com/Nerdzao/", target="_BLANK")
          img.partner__image(src="~assets/img/nerdzao.jpeg", title="3979 membros")
      div
        a(href="https://www.meetup.com/Vue-js-in-Rio/", target="_BLANK")
          img.partner__image(src="~assets/img/vuejs-rj.jpeg", title="354 membros")
        a(href="https://www.meetup.com/Javascript-SP/", target="_BLANK")
          img.partner__image(src="~assets/img/jssp.jpeg", title="3595 membros")
        a(href="https://www.meetup.com/nodebr/", target="_BLANK")
          img.partner__image(src="~assets/img/nodebr.jpg", title="2506 membros")
        a(href="https://www.meetup.com/vuefloripa/", target="_BLANK")
          img.partner__image(src="~assets/img/vuefloripa.png", title="309 membros")
      div
        a(href="https://www.meetup.com/Frontend-Dev-SP-Meetup/", target="_BLANK")
          img.partner__image(src="~assets/img/frontend-sp.jpeg", title="3695 membros")
        a(href="https://www.meetup.com/gdgsjc/", target="_BLANK")
          img.partner__image(src="~assets/img/gdg-sjc.jpeg", title="860 membros")
        a(href="http://www.frontinsampa.com.br/", target="_BLANK")
          img.sponsor__image(src="~assets/img/frontinsampa.jpeg", title="250 membros")
        a(href="https://phpsp.org.br/", target="_BLANK")
          img.partner__image(src="~assets/img/phpsp.jpg", title="4603 membros")
      div
        a(href="https://www.meetup.com/meetupgdguberaba/", target="_BLANK")
          img.partner__image(src="~assets/img/gdg-uberaba.png", title="157 membros")
        a(href="https://www.meetup.com/GDGRioDeJaneiro/", target="_BLANK")
          img.partner__image(src="~assets/img/gdg-rj.png", title="1939 membros")

    p("v-html"="$t('home.sponsors.description2')")
    a.button(href="mailto:vuejssummit@gmail.com") {{ $t('home.sponsors.button2') }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.button
  margin-top: 40px

.sponsors-section
  background-color: $color-white

  h1
    margin-bottom: 40px
  h2
    margin-top: 40px
    margin-bottom: 40px

.sponsors__container
  margin: 60px 0

.sponsor__image
  max-width: 90%
  width: 280px
  height: auto
  max-height: 100px
  margin: 0 20px 20px 20px
  vertical-align: middle
  display: inline-block

.partner__image
  display: inline-block
  vertical-align: middle
  max-width: 90%
  width: 180px
  height: auto
  margin: 0 12px 20px 12px

.partner__image--special
  width: 320px
  margin-bottom: 50px
</style>
