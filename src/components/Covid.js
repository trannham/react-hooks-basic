import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const fromDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${fromDate}}&to=${today}`
  );

  return (
    <>
      <h3>Vietnam Covid19 tracking</h3>
      <table>
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
          {isError === false &&
            isLoading === false &&
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
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
