AppEnv = {
  // @if ENV == 'DEVELOPMENT'
  base_iframe_url: 'http://localhost:3001/',
  env: 'development',
  version: '4.0.0'
  // @endif
  // @if ENV == 'PRODUCTION'
  base_iframe_url: 'http://app.codhab.df.gov.br/',
  env: 'production',
  version: '4.0.0'
  // @endif
}