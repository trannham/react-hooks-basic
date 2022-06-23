import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsErr] = useState(false);
  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });

          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsErr(false);
      };
      fetchData();
    } catch (e) {
      setIsErr(true);
      setIsLoading(false);
    }
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
