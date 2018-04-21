<template lang="pug">
.section.post-section
  .nav-target#venue
  .container__inner
    h1
      | Local
    .half
      img(src="~assets/img/nhcinema.png" alt="New Horizons Cinema, Wrocław")
    .half.text-left
      h2: strong Espaço Paraíso
      p
        | {{ $t('home.local.description1') }}
        strong  Espaço Paraíso
        | , {{ $t('home.local.description2') }} Av. Paulista.

      p
        strong {{ $t('home.local.address') }}
        br
        | Av. Bernardino de Campos, 79
        br
        | Paraíso, São Paulo - SP.
      p
        strong {{ $t('home.local.other') }}
        br
        | Vergueiro, Paraíso e Brigadeiro.
      a.button.button--dark(
        href="https://www.google.com.br/maps/place/Salas+Brasil+-+Paraiso/@-23.5716738,-46.6431551,15z/data=!4m5!3m4!1s0x0:0x3c65b3e7403c5a44!8m2!3d-23.5716738!4d-46.6431551",
        target="_BLANK") {{ $t('home.local.button') }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .section.post-section
    background-color: white

  .half
    display: inline-block
    max-width: 100%
    vertical-align: middle
    text-align: left

    img
      max-width: 100%

    @media #{$medium-up}
      padding: 0 20px
      max-width: calc(50% - 40px)

  .button
    margin-top: 20px
    font-weight: 400
    font-size: 16px
</style>
