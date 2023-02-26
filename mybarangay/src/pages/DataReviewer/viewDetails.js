import Accordion from "react-bootstrap/Accordion";
import "./style.scss";
import ResponsiveBreakpoints from "./surveyTable";
function ViewData(props) {
  const viewData = () => {
    let data = {
      Name: "Arthur",
      "Date of birth": "04-04-1984",
      Age: "40",
      Gender: "Phone number",
      "Phone number": "9090906543",
      "Email ID": "Arthur@gmail.com",
    };
    if (props.data.profile) {
      var date = new Date(props.data.profile.dob),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    // let data = "2018-12-12T00:00:00".split("T")[0];
      let birthDate=[date.getFullYear(), mnth, day].join("-");
      var today = new Date();
      // birthDate = new Date(birthDate);

      var age = today.getFullYear() - date.getFullYear();
      if(age <= 0){
        age = 0
      }
      var m = today.getMonth() - date.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--
        
      }
      data = {
        Name: props.data.first_name,
        "Date of birth": birthDate,
        Age: age,
        Gender: props.data.profile.gender,
        "Phone number": props.data.profile.phone_no,
        "Email ID": props.data.email,
      };
    }
    return data;
  };

  viewData();
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>View Details</Accordion.Header>
        <Accordion.Body>
          <div className="basic-div">
            <div className="basic-div-left">
              {Object.entries(viewData()).map((item) => {
                return (
                  <div className="basic-item">
                    <div className="basic-key">{item[0]}</div>
                    <div className="basic-value">{item[1]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Survey Details</Accordion.Header>
        <Accordion.Body>
          <ResponsiveBreakpoints />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ViewData;
