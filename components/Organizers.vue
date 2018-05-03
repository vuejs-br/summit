<template lang="pug">
.section.organizers-section.post-section
  .container__inner
    h1
      | {{ $t('home.organizers') }}

    .organizers
      .organizer
        img.organizer__image(src="~static/img/thaissa.jpeg" alt="Thaíssa Candella")
        .organizer__title
          | Thaíssa Candella
        .organizer__social
          a.icon.icon--linkedin(href="https://linkedin.com/in/thaissacandella/" target="_blank")

      .organizer
        img.organizer__image(src="~static/img/igor.jpg" alt="Igor Halfeld")
        .organizer__title
          | Igor Halfeld
        .organizer__social
          a.icon.icon--github(href="https://github.com/Halfeld" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/IgorHalfeld" target="_blank")
    h1
      | {{ $t('home.contributors') }}

    .organizers
      .organizer
        img.organizer__image(src="~static/img/devid.png" alt="Deivid Marques")
        .organizer__title
          | Deivid Marques
        .organizer__social
          a.icon.icon--github(href="https://github.com/deividmarques" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/deividmarques" target="_blank")
      .organizer
        img.organizer__image(src="~static/img/rodrigo.jpeg" alt="Rodrigo Botti")
        .organizer__title
          | Rodrigo Botti
        .organizer__social
          a.icon.icon--linkedin(href="https://linkedin.com/in/rodrigo-botti/" target="_blank")
          a.icon.icon--github(href="https://github.com/rodrigobotti" target="_blank")
      .organizer
        img.organizer__image(src="~static/img/caio.jpeg" alt="Caio Incau")
        .organizer__title
          | Caio Incau
        .organizer__social
          a.icon.icon--github(href="https://github.com/caioincau" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/iCaioIncau" target="_blank")
    .organizers
      .organizer
        img.organizer__image(src="~static/img/vini.jpeg" alt="Vinicius Reis")
        .organizer__title
          | Vinicius Reis
        .organizer__social
          a.icon.icon--github(href="https://github.com/vinicius73" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/luizVinicius73" target="_blank")
      .organizer
        img.organizer__image(src="~static/img/juscilan.jpeg" alt="Juscilan Moreto")
        .organizer__title
          | Juscilan Moreto
        .organizer__social
          a.icon.icon--github(href="https://github.com/juscilan" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/juscilan" target="_blank")
      .organizer
        img.organizer__image(src="~static/img/shin.jpeg" alt="Eduardo Shinkawa")
        .organizer__title
          | Eduardo Shinkawa
        .organizer__social
          a.icon.icon--github(href="https://github.com/eshinkawa" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/dushin84" target="_blank")
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.organizers
  display: flex
  justify-content: space-around
  flex-wrap: wrap

.section.organizers-section
  padding-bottom: 0

.organizer
  width: 100%
  margin: 10px 0 40px 0

  @media #{$medium-up}
    width: 50%

  @media #{$large-up}
    width: 25%
    margin: 10px 0

.organizer__title
  font-size: 24px
  font-weight: 600
  color: $color-text

.organizer__subtitle
  font-size: 18px
  font-weight: 300
  color: $color-blue

.organizer__image
  max-width: 202px
  margin-bottom: 15px
  border-radius: 300px

.organizer__social
  margin-top: 15px

  .icon--twitter
    margin-left: 15px

.organizer__company
  width: 100%
  margin: 10px 0

  @media #{$large-up}
    width: 35%

.organizers__logo
  img
    max-width: 233px
    width: 100%

.organizer__content
  display: inline-block

  @media #{$large-up}
    display: flex
    flex-direction: column
    margin-top: 45px

  .post-section__paragraph
    text-align: center

.organizers-more
  margin-top: 60px

.organizers-more__text,
.organizers-more__button
  margin: 10px 0

  @media #{$large-up}
    display: inline-block
    vertical-align: middle

.organizers-more__text
  font-size: 18px
  font-weight: 300
  color: $color-text
  line-height: 1.4
  text-align: left

  a
    font-weight: 600
    text-decoration: none
    color: $color-red

  @media #{$large-up}
    font-size: 20px
    text-align: center

.organizers-more__button
  background-color: $color-red

  &:hover
    background-color: lighten($color-red, 10%)
</style>
