const axios = require('axios')

module.exports = async function ({ method, url, body, headers }) {
  try {
    const response = await axios({
      method,
      url: `${process.env.OLLAMA_URL}${url}`,
      data: body,
      headers,
      validateStatus: () => true,
    })
    return { status: response.status, data: response.data }
  } catch (error) {
    return { status: 500, data: { error: error.message } }
  }
}
