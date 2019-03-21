AppEnv = {
  // @if ENV == 'DEVELOPMENT'
  base_iframe_url: 'http://localhost:3001/',
  debug: true,
  // @endif
  // @if ENV == 'PRODUCTION'
  base_iframe_url: 'http://app.codhab.df.gov.br/'
  // @endif
}