AppEnv = {
  // @if ENV == 'DEVELOPMENT'
  baseApiUrl: 'http://localhost:3001/',
  debug: true,
  // @endif
  // @if ENV == 'PRODUCTION'
  baseApiUrl: 'https://app.codhab.df.gov.br/'
  // @endif
}