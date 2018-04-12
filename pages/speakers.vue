<template lang="pug">
.container
  .container__inner.post-section
    h1
      | Palestrantes

    speakers-list(:speakers="speakers", :adjust-img-url="true")

    // .center
    //   nuxt-link(to="/schedule")
    //     button.button.speaker-button Veja a agenda!
</template>

<script>
import SpeakersList from '../components/SpeakersList'
import speakers from '../content/speakers/speaker-list'

export default {
  head: {
    title: 'Vue.js summit 2018 | Palestrantes'
  },
  components: { SpeakersList },
  data () {
    return {
      speakers
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

h2
  margin: 60px 0 100px

.container__inner
  text-align: center
  z-index: 2

.cfp-section
  border-top: 1px solid #ddd
  padding-top: 60px

.speaker-button
  margin-top: 30px
</style>
