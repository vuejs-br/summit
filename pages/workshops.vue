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
          href="https://www.google.com.br/maps/place/Av.+das+Na%C3%A7%C3%B5es+Unidas,+3003+-+Bonfim,+Osasco+-+SP,+06233-200/@-23.5240151,-46.7627758,17z/data=!3m1!4b1!4m5!3m4!1s0x94ceff25295ec1a1:0xa77b87201dfde53f!8m2!3d-23.52402!4d-46.7605871",
          target="_BLANK")  Mercado Livre - Melicidade
      br
      span
        | Av. das Nações Unidas, 3003 - Bonfim, Osasco - SP, 06233-200
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
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket")
          | {{ $t('workshops.schedule.button') }} - R$280.00 - 4h
          br
          strong {{ $t('workshops.workshopsTime[0]') }}
      talk(:talk="blakeWorkshop", :desc-flex="7")
        :markdown-it
          Introdução ao Vuex através de exemplos fáceis e exercícios. Você aprenderá como integrar a Vuex em seus projetos atuais seguindo as melhores práticas!
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket")
          | {{ $t('workshops.schedule.button') }} - R$160.00 - 2h
          br
          strong {{ $t('workshops.workshopsTime[1]') }}
      talk(:talk="dianaWorkshop1", :desc-flex="7")
        :markdown-it
          **Vue Vixens Workshop - Para mulheres ou pessoas que se identificam como.**
          Comece com o Vue.js criando um aplicativo da Web estático de Pet Shop. Usando dados estáticos, você construirá uma interface de cartão para mostrar muitos cães adotáveis e, usando a API do DogCEO, carregará também imagens de cães dinamicamente, em vez de usar dados fictícios.
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket")
          | {{ $t('workshops.schedule.button2') }} - 4h
          br
          strong {{ $t('workshops.workshopsTime[2]') }}
      talk(:talk="sarahWorkshop", :desc-flex="7")
        :markdown-it
          We will go through common external JavaScript libraries, how to implement them into Vue and VueX, and make them reactive. Charts, CSS frameworks, utilities, http clients and more.
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket")
          | {{ $t('workshops.schedule.button') }} - R$160.00 - 2h
          br
          strong {{ $t('workshops.workshopsTime[3]') }}
      talk(:talk="dianaWorkshop2", :desc-flex="7")
        :markdown-it
          **Vue Vixens Workshop - Para mulheres ou pessoas que se identificam como.**
          Neste workshop, passaremos da criação de um aplicativo da Web para criar uma experiência de adoção de animais de estimação para criar um aplicativo para dispositivos móveis para uma variação desse tema. Usando a API do CEO Dog novamente, vamos criar "Tinder for Dogs" - "Tindogs" - onde o usuário pode carregar um baralho de 15 imagens de cachorro de cada vez e deslizar para a esquerda e para a direita para "curtir" vários cães. Tudo em boa diversão!
        a.button(href="https://www.eventbrite.com.br/e/vuejs-summit-18-tickets-45368001915" slot="ticket")
          | {{ $t('workshops.schedule.button2') }} - 4h
          br
          strong {{ $t('workshops.workshopsTime[4]') }}
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
        topic: ["Making External Libraries Reactive in Vue.js", "Making External Libraries Reactive in Vue.js"],
        author: ["Jacob Schatz", "Jacob Schatz"],
        social: [
          {
            gitlab: "https://gitlab.com/jschatz1",
            twitter: "https://twitter.com/jakecodes"
          }
        ],
        authorInfo: ["Staff Engineer of Data Science", "Staff Engineer of Data Science"],
      },
      dianaWorkshop1: {
        type: "talk",
        img: "/img/diana.jpeg",
        topic: ["Criando um webapp para um PetShow", "Criando um webapp para um PetShow"],
        author: ["Diana Rodriguez", "Diana Rodriguez"],
        speakerLabel: "Vue Vixens Skulk",
        social: [
          {
            github: "https://gitlab.com/alphacentauri82",
            twitter: "https://twitter.com/cotufa82"
          }
        ],
        authorInfo: ["DevOps/FullStack Developer & Director of Vue Vixens Argentina.", "DevOps/FullStack Developer & Director of Vue Vixens Argentina."],
      },
      dianaWorkshop2: {
        type: "talk",
        img: "/img/diana.jpeg",
        topic: ["Meu primeiro App Mobile com Nativescript-Vue: Tindogs", "Meu primeiro App Mobile com Nativescript-Vue: Tindogs"],
        author: ["Diana Rodriguez", "Diana Rodriguez"],
        speakerLabel: "Vue Vixens Skulk",
        social: [
          {
            github: "https://gitlab.com/alphacentauri82",
            twitter: "https://twitter.com/cotufa82"
          }
        ],
        authorInfo: ["DevOps/FullStack Developer & Director of Vue Vixens Argentina.", "DevOps/FullStack Developer & Director of Vue Vixens Argentina."],
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
