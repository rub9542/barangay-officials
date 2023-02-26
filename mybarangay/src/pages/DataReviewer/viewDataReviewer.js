import ViewData from "./viewDetails";
import Breadcrumb from "../../components/Breadcrumb/index";
import { Routes, Route, useParams } from "react-router-dom";
import { postData, getData, getCurrentUser } from "../../api";
import { useEffect, useState } from "react";

const ViewDataReviewer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getUserSetting();
  }, []);
  const getUserSetting = async () => {
    const res = await getData(`view-data-reviewer/${id}/`, {});
    setData(res.data);
  };

  return (
    <div className="bread_title">
      <Breadcrumb
        breadcrumb_lists={[
          { heading: "Data Reviewer", link: "ssss" },
          { heading: "View Details", link: "" },
        ]}
      />
      <ViewData data={data} />
    </div>
  );
};

export default ViewDataReviewer;
