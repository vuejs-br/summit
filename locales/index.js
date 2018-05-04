const ptMessages = require('./pt')
const enMessages = require('./en')

module.exports = {
  locales: [
    { code: 'pt', iso: 'pt-BR' },
    { code: 'en', iso: 'en-US' }
  ],
  defaultLocale: 'pt',
  vueI18n: {
    fallbackLocale: 'pt',
    messages: {
      pt: ptMessages,
      en: enMessages
    }
  }
}
