import { NavLink, Outlet } from "react-router-dom";
export default function BarangaySurvey() {
    return (
      <>
            <h4 className="page_title">Survey</h4>
            <div className="survey_data_wrapper">
                <nav className="custom_nav">
                    <ul >
                        <li>
                            <NavLink to="/barangay-survey/pending-survey">Pending for approval</NavLink>
                        </li>
                         <li>
                            <NavLink to="/barangay-survey/approving-survey">Approving Surveys</NavLink>
                        </li>
                         <li>
                            <NavLink to="/barangay-survey/completed-survey">Completed Surveys</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="survey_data">  
                    <Outlet></Outlet>
                </div>
            </div>
      </>
    );
  }