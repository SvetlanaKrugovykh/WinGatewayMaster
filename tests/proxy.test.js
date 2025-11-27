describe('Proxy server', function () {
  const axios = require('axios')
  const assert = require('assert')

  const BASE_URL = 'http://localhost:8080'

  describe('Proxy server', function () {
    it('should proxy POST /api/generate to ollama', async function () {
      const response = await axios.post(`${BASE_URL}/api/generate`, {
        model: 'llama2',
        prompt: 'Hello!'
      })
      assert(response.status === 200)
      assert(response.data)
    })
  })
})
