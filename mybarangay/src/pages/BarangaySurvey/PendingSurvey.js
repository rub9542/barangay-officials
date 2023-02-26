import { useEffect, useState } from "react";
import ServerSideTable from "../../components/ServerSideTable";
import { postData } from "../../api";

const PendingSurvey = () => {

  return (
    <div>
      <table class="table">
        <tbody>
          <tr>
            <td> <span className="table_survey_name">Survey ID - 12345</span></td>
            <td><span className="table_survey_text">Date Assigned</span> - 22/04/2021</td>
            <td><span className="table_survey_text">Data Reviewer ID</span> - ASD123765</td>
            <td><span className="table_survey_regular">Regular</span></td>
            <td><span></span></td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default PendingSurvey;
