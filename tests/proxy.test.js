
const axios = require('axios')
require('dotenv').config()
const BASE_URL = `http://localhost:${process.env.PORT || 8080}`

async function testProxy() {
  try {
    const response = await axios.post(`${BASE_URL}/api/generate`, {
      model: process.env.MODEL,
      prompt: 'Hello!'
    })
    if (response.status === 200 && response.data) {
      console.log('Proxy test PASSED')
      console.log('Response:', response.data)
    } else {
      console.error('Proxy test FAILED: Unexpected status or empty data', response.status)
    }
  } catch (err) {
    console.error('Proxy test FAILED:', err.message)
    if (err.response) {
      console.error('Response:', err.response.data)
    }
    console.error('Stack:', err.stack)
  }
}

testProxy()
