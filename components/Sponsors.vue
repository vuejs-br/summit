<template lang="pug">
.section.sponsors-section.center
  .container__inner
    h1 Patrocinadores
    .sponsors__container
      .div
        a(href="https://stored.com.br/", target="_BLANK")
          img.partner__image(src="~assets/img/stored.png")

    p Patrocine essa iniciativa, tenha sua marca nesse evento
    p e nos auxilie a tornar essa experiência inesquecível
    a.button(href="mailto:vuejssummit@gmail.com") Seja patrocinador

    h2 Comunidades parceiras
    .sponsors__container
      div
        a(href="https://www.meetup.com/VueJS-SP/", target="_BLANK")
          img.partner__image(src="~assets/img/vuejssp.jpeg")
        a(href="https://www.meetup.com/campinas-frontend/", target="_BLANK")
          img.partner__image(src="~assets/img/front-campinas.jpeg")
        a(href="https://www.meetup.com/gdgcampinas/", target="_BLANK")
          img.partner__image(src="~assets/img/gdg-campinas.svg")
        a(href="https://www.meetup.com/Nerdzao/", target="_BLANK")
          img.partner__image(src="~assets/img/nerdzao.jpeg")
      div
        a(href="https://www.meetup.com/Vue-js-in-Rio/", target="_BLANK")
          img.partner__image(src="~assets/img/vuejs-rj.jpeg")
        a(href="https://www.meetup.com/Javascript-SP/", target="_BLANK")
          img.partner__image(src="~assets/img/jssp.jpeg")
        a(href="https://www.meetup.com/nodebr/", target="_BLANK")
          img.partner__image(src="~assets/img/nodebr.jpg")
      div
        a(href="https://www.meetup.com/Frontend-Dev-SP-Meetup/", target="_BLANK")
          img.partner__image(src="~assets/img/frontend-sp.jpeg")
        a(href="http://www.frontinsampa.com.br/", target="_BLANK")
          img.sponsor__image(src="~assets/img/frontinsampa.jpeg")

    p Comunidades que nos auxiliarão na divulgação intensa do evento
    p para alcançar o máximo de interessados possíveis.
    a.button(href="mailto:vuejssummit@gmail.com") Seja parceiro
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
