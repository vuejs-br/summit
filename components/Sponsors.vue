<template lang="pug">
.section.sponsors-section.center
  .container__inner
    h2 {{ $t('home.sponsors.title1') }}
    h3 {{ $t('home.sponsors.types.gold') }}
    .sponsors__container
      .div.partner__image--special
        a(href="https://www.accenture.com/", target="_BLANK")
          img.partner__image--special(src="~assets/img/acc.png")
    h3 {{ $t('home.sponsors.types.silver') }}
      .sponsors__container
        .div.partner__image
          a(href="https://www.revelo.com.br/", target="_BLANK")
            img.partner__image(src="~assets/img/revelo.png")
        .div.partner__image
          a(href="http://jardim.in/", target="_BLANK")
            img.partner__image(src="~assets/img/jd.png")
    h3 {{ $t('home.sponsors.types.bronze') }}
      .sponsors__container
        .div.partner__image(style="width: 100px;")
          a(href="http://stored.com.br/", target="_BLANK")
            img.partner__image(src="~assets/img/stored.png", style="width: 100px;")
        .div.partner__image(style="width: 100px;")
          a(href="http://impulso.work/", target="_BLANK")
            img.partner__image(src="~assets/img/impulso-work-logo.svg", style="width: 100px;")
        .div.partner__image(style="width: 100px;")
          a(href="http://mercadolivre.com/", target="_BLANK")
            img.partner__image(src="~assets/img/ml.png", style="width: 100px;")

    p("v-html"="$t('home.sponsors.description1')")
    a.button(href="mailto:vuejssummit@gmail.com") {{ $t('home.sponsors.button1') }}

    h2 {{ $t('home.sponsors.title3') }}
    .container__inner
      .sponsors__container
        .div.partner__image(style="width: 100px;")
          a(href="https://www.infoq.com/br/", target="_BLANK")
            img.partner__image(src="~assets/img/infoq.png", style="width: 100px;")
        .div.partner__image(style="width: 100px;")
          a(href="https://www.infoq.com/br/", target="_BLANK")
            img.partner__image(src="~assets/img/novatec.png", style="width: 100px;")
        .div.partner__image(style="width: 100px;")
          a(href="https://imasters.com.br/", target="_BLANK")
            img.partner__image(src="~assets/img/imasters.png", style="width: 100px;")
        .div.partner__image(style="width: 100px;")
          a(href="http://logcomex.com/", target="_BLANK")
            img.partner__image(src="~assets/img/logc.png", style="width: 100px;")

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
        a(href="https://www.meetup.com/Vuejs-at-BH/", target="_BLANK")
          img.partner__image(src="~assets/img/vue-bh.jpg", title="410 membros")
        a(href="https://www.meetup.com/pt-BR/Vue-js-Norte/", target="_BLANK")
          img.partner__image(src="~assets/img/vue-norte.jpg", title="50 membros")

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
  display: inline-block
  vertical-align: middle
  max-width: 90%
  width: 380px
  height: auto
  margin: 0 12px 20px 12px
</style>
