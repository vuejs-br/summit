const ptMessages = require('./pt')
const esMessages = require('./en')

module.exports = {
  locales: [
    { code: 'pt' },
    { code: 'es' }
  ],
  defaultLocale: 'pt',
  vueI18n: {
    fallbackLocale: 'pt',
    messages: {
      pt: ptMessages,
      es: esMessages
    }
  }
}
