import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  //componentDidMount
  useEffect(() => {
    setTimeout(async () => {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
      );
      let data = res && res.data ? res.data : [];

      //Same to:
      // let data = null;
      // if (res && res.data) {
      //   data = res.data;
      // } else {
      //   data = [];
      // }

      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });

        data = data.reverse();
      }
      setDataCovid(data);
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <h3>Vietnam Covid19 tracking</h3>
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
          {loading === false &&
            dataCovid &&
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
          {loading === true && (
            <tr>
              <td colspan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
