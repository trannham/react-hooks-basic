import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  //componentDidMount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
    );
    let data = res && res.data ? res.data : [];

    setDataCovid(data);
  }, []);
  return (
    <table>
      {console.log(">>>Data covid", dataCovid)}
      <thead>
        <tr>
          <th>Date</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Active}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Recovered}</td>
                <td>{item.Deaths}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Covid;
