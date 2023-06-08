import {useState, useEffect} from "react";
import API from '../utils/api.js'

const useRequest = (initUrl) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    let ignore = false;
    const fetchResponse = async () => {
      setLoading(true);
      try {
        setError(undefined);
        const response = await API.get(initUrl);
        if (!ignore) setData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchResponse();
    return (() => { ignore = true; });
  }, [initUrl]);

  return { data, loading, error };
};

export default useRequest;