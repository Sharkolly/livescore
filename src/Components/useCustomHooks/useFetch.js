import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(dataurl) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getFetchDataFunction = async (url) => {
    try {
      const dataUsingAxios = await axios.get(url);
      setLoading(true);
      const response = await dataUsingAxios.data;
      setData(response);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect((e) => {
    getFetchDataFunction(dataurl);
  }, []);

  return { data, loading, error };
}
