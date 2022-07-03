import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsErr] = useState(false);
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });

          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsErr(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log(e.message);
        } else {
          setIsErr(true);
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      ourRequest.cancel("Operation cancelled by the user");
    };
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
