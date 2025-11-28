const Service = require('node-windows').Service
require('dotenv').config({ path: require('path').join(__dirname, '.env') })

const svc = new Service({
  name: 'OllamaProxyGateway',
  description: 'Fastify proxy for Ollama on Windows',
  script: require('path').join(__dirname, 'index.js'),
  env: [
    {
      name: 'OLLAMA_URL',
      value: process.env.OLLAMA_URL
    },
    {
      name: 'PORT',
      value: process.env.PORT
    },
    {
      name: 'HOST',
      value: process.env.HOST
    },
    {
      name: 'MODEL',
      value: process.env.MODEL
    }
  ]
})

svc.on('install', () => {
  svc.start()
  console.log('Service installed and started.')
})

svc.on('alreadyinstalled', () => {
  console.log('Service is already installed.')
})

svc.on('start', () => {
  console.log('Service started.')
})

svc.on('stop', () => {
  console.log('Service stopped.')
})

svc.on('uninstall', () => {
  console.log('Service uninstalled.')
})

// Install the service
if (process.argv.includes('install')) {
  svc.install()
} else if (process.argv.includes('uninstall')) {
  svc.uninstall()
} else {
  console.log('Usage: node winservice.js install|uninstall')
}
