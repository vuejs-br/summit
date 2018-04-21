<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Workshops
    p.subheader__description
      strong {{ $t('workshops.date') }}
      br
      | {{ $t('workshops.description') }}
      br
      strong 
        | {{ $t('workshops.location') }}
        a(
          href="https://www.google.com.br/maps/place/Salas+Brasil+-+Paraiso/@-23.5716738,-46.6431551,15z/data=!4m5!3m4!1s0x0:0x3c65b3e7403c5a44!8m2!3d-23.5716738!4d-46.6431551",
          target="_BLANK")  Espaço Paraíso
      br
      //- br
      //- | Theory is not enough.
      //- br
      //- | Join our intensive,
      //- strong  8-hour long workshops
      //- |  with world-class Vue.js experts.
      //- br
      // br
      // | Workshops são vendidos separados da conferência
      br
      br
      small
        strong {{ $t('workshops.requeriments.title') }}
        br
        | {{ $t('workshops.requeriments.line1') }}
        br
        | {{ $t('workshops.requeriments.line2') }}
        br
        | {{ $t('workshops.requeriments.line3') }}
    .agenda
      talk(:talk="evanWorkshop", :desc-flex="7")
        :markdown-it
            A definir
        a.button(slot="ticket", disabled) {{ $t('workshops.schedule.button') }}
      talk(:talk="blakeWorkshop", :desc-flex="7")
        :markdown-it
          A definir
        a.button(slot="ticket", disabled) {{ $t('workshops.schedule.button') }}
      talk(:talk="sarahWorkshop", :desc-flex="7")
        :markdown-it
          A definir
        a.button(slot="ticket", disabled) {{ $t('workshops.schedule.button') }}
    .center
      a(href="https://docs.google.com/forms/d/e/1FAIpQLSfFP7wJhNkaYtVUwnKYLhgtW6HIr7ESVSXn_o86zbUMqTtbww/viewform", target="_BLANK")
        button.button.speaker-button {{ $t('workshops.button') }}
</template>

<script>
import Talk from '../components/Talk'

export default {
  head: {
    title: 'Vue.js summit 2018 | Workshops'
  },
  components: { Talk },
  data () {
    return {
      evanWorkshop: {
        type: "talk",
        img: "/img/avatar.jpg",
        topic: ["A definir", "To be defined"],
        author: ["A definir", "To be defined"],
        social: [
          {
            github: "https://github.com/#",
            twitter: "https://twitter.com/#"
          }
        ],
        authorInfo: ["Submissão da comunidade", "Community submission"],
      },
      blakeWorkshop: {
        type: "talk",
        img: "/img/avatar.jpg",
        topic: ["A definir", "To be defined"],
        author: ["A definir", "To be defined"],
        social: [
          {
            github: "https://github.com/#",
            twitter: "https://twitter.com/#"
          }
        ],
        authorInfo: ["Submissão da comunidade", "Community submission"],
      },
      sarahWorkshop: {
        type: "talk",
        img: "/img/avatar.jpg",
        topic: ["A definir", "To be defined"],
        author: ["A definir", "To be defined"],
        social: [
          {
            github: "https://github.com/#",
            twitter: "https://twitter.com/#"
          }
        ],
        authorInfo: ["Submissão da comunidade", "Community submission"],
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__card
  height: 100px
  width: 100%

.agenda__header
  margin-bottom: 20px

.subheader__description
  margin: 0 0 80px
</style>
