import { useEffect, useState } from "react";
import ServerSideTable from "../../components/ServerSideTable";
import { postData } from "../../api";
import Table from 'react-bootstrap/Table';
//scss
import "./style.scss";
// import AddUser from "./AddUser";
// import Status from "./Status";
// import View from "./View";
// import Manage from "./Manage";
import { Link } from "react-router-dom";
const SurveyQuestion = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h4 className="page_title">Survey Questions</h4>
      
      <Table className="mt-4">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Questions Subheading</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Basic Information</td>
          <td><i class="fa fa-eye" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Basic Information</td>
          <td><i class="fa fa-eye" aria-hidden="true"></i></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default SurveyQuestion;
