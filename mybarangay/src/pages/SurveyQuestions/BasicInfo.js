import { useEffect, useState } from "react";
import ServerSideTable from "../../components/ServerSideTable";
import { postData } from "../../api";
import Table from 'react-bootstrap/Table';
const SurveyQuestion = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h4 className="page_title">Survey Questions</h4>
     
    </div>
  );
};

export default SurveyQuestion;
