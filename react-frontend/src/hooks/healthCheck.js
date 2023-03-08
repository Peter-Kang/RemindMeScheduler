import API from '../utils/api.js'

export const getHealthCheck = async () => {
    console.log('HealthCheckCallMade');
    const { data } = await API.get('/HealthCheck');
    console.log(data);
    return data;
  };