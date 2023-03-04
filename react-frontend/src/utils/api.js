const axios = require('axios');
import { env } from '../env.js'

export default axios.create({
  baseURL: `${env.api.endpoint.protocol}://${env.api.endpoint.host}:${env.api.endpoint.port}`,
  headers: { 'content-type': 'application/json' },
})