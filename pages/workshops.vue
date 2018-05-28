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
      | {{ $t('home.hero.obs') }}
      //- br
      //- | Theory is not enough.
      //- br
      //- | Join our intensive,
      //- strong  8-hour long workshops
      //- |  with world-class Vue.js experts.
      //- br
      // br
      // | Workshops são vendidos separados da conferência
      // br
      // br
      // small
      //   strong {{ $t('workshops.requeriments.title') }}
        // br
        // | {{ $t('workshops.requeriments.line1') }}
    .agenda
      talk(:talk="evanWorkshop", :desc-flex="7")
        :markdown-it
            We'll cover everything from documenting and enforcing best practices, to writing robust, fast, and debuggable unit and **end-to-end tests**. This will help you and your **team not only avoid mistakes**, but also **better communicate**, end bikeshedding, and build amazing features faster.
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket") {{ $t('workshops.schedule.button') }} - R$170.00 - 4h
      talk(:talk="blakeWorkshop", :desc-flex="7")
        :markdown-it
          Introdução ao Vuex através de exemplos fáceis e exercícios. Você aprenderá como integrar a Vuex em seus projetos atuais seguindo as melhores práticas!
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket") {{ $t('workshops.schedule.button') }} - R$110.00 - 2h
      talk(:talk="sarahWorkshop", :desc-flex="7")
        :markdown-it
          A definir
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket") {{ $t('workshops.schedule.button') }} - R$110.00 - 2h
    .center
      a(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915", target="_BLANK")
        button.button.speaker-button {{ $t('home.hero.button1') }}
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
        img: "/img/chris.jpg",
        topic: ["Making it hard to Vue wrong with linting and tests.", "Making it hard to Vue wrong with linting and tests."],
        author: ["Chris Fritz", "Chris Fritz"],
        speakerLabel: "Core Commiter",
        social: [
          {
            github: "https://github.com/chrisvfritz",
            twitter: "https://twitter.com/chrisvfritz"
          }
        ],
        authorInfo: ["Vue.js Consultant and Vue Core Team", "Vue.js Consultant and Vue Core Team"],
      },
      blakeWorkshop: {
        type: "talk",
        img: "/img/gerad.jpeg",
        topic: ["Introdução a Vuex para pessoas com pressa.", "Introdução a Vuex para pessoas com pressa."],
        author: ["Gerard Sans", "Gerard Sans"],
        speakerLabel: "Google Developer Expert",
        social: [
          {
            github: "https://github.com/gsans",
            twitter: "https://twitter.com/gerardsans"
          }
        ],
        authorInfo: ["Senior Frontend JavaScript Developer at Keytree", "Senior Frontend JavaScript Developer at Keytree"],
      },
      sarahWorkshop: {
        type: "talk",
        img: "/img/jacob.jpeg",
        topic: ["A definir", "To be defined"],
        author: ["Jacob Schatz", "Jacob Schatz"],
        social: [
          {
            gitlab: "https://gitlab.com/jschatz1",
            twitter: "https://twitter.com/jakecodes"
          }
        ],
        authorInfo: ["Lead Frontend Engineer at Gitlab", "Lead Frontend Engineer at Gitlab"],
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
