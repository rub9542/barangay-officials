import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Login from "./pages/Login";
import LoginSelection from "./pages/LoginSelection";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DashBoard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Users from "./pages/Users";
import SurveyQuestion from "./pages/SurveyQuestions";
import HelpAndSupport from "./pages/HelpAndSupport";
import Layout from "./layout";
import "./App.scss";
import Barangay from "./pages/Barangay";
import BarangaySurvey from "./pages/BarangaySurvey";
import PendingSurvey from "./pages/BarangaySurvey/PendingSurvey";
import ApprovingSurvey from "./pages/BarangaySurvey/ApprovingSurvey";
import CompletedSurvey from "./pages/BarangaySurvey/CompletedSurvey";
import DataCollector from "./pages/DataCollector";
import TermsCondition from "./pages/TermsConditions/TermsCondition";
import DataReviewer from "./pages/DataReviewer";
import CodeVerification from "./pages/CodeVerification";
import ViewDataCollector from "./pages/DataCollector/viewDataCollector";
import DataReviewerSurvey from "./pages/DataReviewer/dataReviewerSurvey";
import ViewDataReviewer from "./pages/DataReviewer/viewDataReviewer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login-selection"
            exact={true}
            element={<LoginSelection />}
          />
          <Route path="/login" exact={true} element={<Login />} />
          <Route
            path="/forgot-password"
            exact={true}
            element={<ForgotPassword />}
          ></Route>
          <Route
            path="/code-verification"
            exact={true}
            element={<CodeVerification />}
          ></Route>
          <Route
            path="/reset-password"
            exact={true}
            element={<ResetPassword />}
          ></Route>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" exact={true} element={<DashBoard />} />
            <Route path="/reports" exact={true} element={<Reports />} />
            <Route path="/barangay" exact={true} element={<Barangay />} />
            <Route
              path="/survey-question"
              exact={true}
              element={<SurveyQuestion />}
            />
            {/* <Route path="/users" exact={true} element={<Users />} /> */}
            <Route
              path="/termsConditions"
              exact={true}
              element={<TermsCondition />}
            />

            <Route
              path="/help-support"
              exact={true}
              element={<HelpAndSupport />}
            />
            <Route path="/barangay-survey" element={<BarangaySurvey />}>
              <Route
                path="/barangay-survey"
                exact={true}
                element={<PendingSurvey />}
              />
              <Route
                path="/barangay-survey/pending-survey"
                exact={true}
                element={<PendingSurvey />}
              />
              <Route
                path="/barangay-survey/approving-survey"
                exact={true}
                element={<ApprovingSurvey />}
              />
              <Route
                path="/barangay-survey/completed-survey"
                exact={true}
                element={<CompletedSurvey />}
              />
            </Route>
            <Route path="data-collector" element={<DataCollector />} />
            <Route
              path="/data-collector/view"
              element={<ViewDataCollector />}
            />
            <Route
              path="/data-reviewer"
              exact={true}
              element={<DataReviewer />}
            />
            <Route
              path="/data-reviewer/view/:id"
              element={<ViewDataReviewer />}
            />
            <Route
              path="/data-reviewer-survey"
              exact={true}
              element={<DataReviewerSurvey />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
