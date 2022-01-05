module.exports = {
  apps: [
    {
      name: 'Nuxt-chat',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    }
  ]
}
