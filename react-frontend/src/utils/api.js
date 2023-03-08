
import axios from 'axios';
import { env } from '../env.js';

const axiosConfig = 
{
    baseURL: `${env.api.endpoint.protocol}://${env.api.endpoint.host}:${env.api.endpoint.port}`,
    timeout: 30000,
    headers: 
            { 
                'content-type': 'application/json' ,
                'rejectUnauthorized': 'false',
                'Accept': '*/*'
            },
}

export default axios.default.create( axiosConfig);