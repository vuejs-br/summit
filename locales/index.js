const ptMessages = require('./pt')
const enMessages = require('./en')

module.exports = {
  locales: [
    { code: 'pt' },
    { code: 'en' }
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
