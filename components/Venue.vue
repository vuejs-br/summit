<template lang="pug">
.section.post-section
  .nav-target#venue
  .container__inner
    h1
      | {{ $t('home.place.title') }}
    .half
      img(src="~assets/img/nhcinema.png" alt="New Horizons Cinema, Wrocław")
    .half.text-left
      h2: strong Espaço Paraíso
      p
        | {{ $t('home.place.description1') }}
        strong  Espaço Paraíso
        | , {{ $t('home.place.description2') }} Av. Paulista.

      p
        strong {{ $t('home.place.address') }}
        br
        | Av. Bernardino de Campos, 79
        br
        | Paraíso, São Paulo - SP.
      p
        strong {{ $t('home.place.other') }}
        br
        | Vergueiro, Paraíso e Brigadeiro.
      a.button.button--dark(
        href="https://maps.google.com/?cid=4352082420719966788",
        target="_BLANK") {{ $t('home.place.button') }}
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
