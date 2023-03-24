import API from '../utils/api.js'
import {useState, useEffect} from "react";

export const getHealthCheck = async () => {
  console.log('HealthCheckCallMade');
  const { data } = await API.get('/HealthCheck');
  console.log(data);
  return data;
};

export const useHealthCheck = () => {
  // isAlive is the result of getHealthCheck
  const [isAlive, setIsAlive] = useState('loading...')
  
  // shouldRetrigger is a variable that can force the effect to run again
  const [shouldRetrigger, setShouldRetrigger] = useState(true)

  useEffect(() => {
      // make an async function to fetch, and then update the state
      const getAndUpdateHealthCheck = async () => {
          if (shouldRetrigger) {
            const healthCheckResponse = await getHealthCheck()
            setIsAlive(healthCheckResponse)
            setShouldRetrigger(false)
          }
      }
      // call our function
      getAndUpdateHealthCheck()
  }, [shouldRetrigger]);

  const retrigger = () => {
    setIsAlive('loading...');
    setShouldRetrigger(true);
  };
  return {isAlive, retrigger};
}
