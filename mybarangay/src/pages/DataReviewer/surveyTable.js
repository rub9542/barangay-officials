import Table from "react-bootstrap/Table";

function ResponsiveBreakpoints() {
  const surveyTable = [
    {
      "S.no": "1",
      "Location allocated": "Locality 1",
      Population: "300",
      Status: "Completed",
    },
    {
      "S.no": "2",
      "Location allocated": "Locality 2",
      Population: "400",
      Status: "Pending",
    },
    {
      "S.no": "3",
      "Location allocated": "Locality 3",
      Population: "500",
      Status: "Pending",
    },
    {
      "S.no": "4",
      "Location allocated": "Locality 4",
      Population: "600",
      Status: "Completed",
    },
    {
      "S.no": "5",
      "Location allocated": "Locality 5",
      Population: "700",
      Status: "Pending",
    },
  ];
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            {Object.keys(surveyTable[0]).map((item, index) => {
              return (
                <th className="table-head-item" key={index}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {surveyTable.map((item, index) => {
            return (
              <tr key={index}>
                <td className="survey survey-index">{item["S.no"]}</td>
                <td className="survey survey-loc">
                  {" "}
                  {item["Location allocated"]}
                </td>
                <td className="survey survey-population">
                  {item["Population"]}
                </td>
                <td className="survey survey-status">{item["Status"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ResponsiveBreakpoints;
