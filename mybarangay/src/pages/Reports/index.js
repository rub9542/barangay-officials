import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Multiselect from 'multiselect-react-dropdown';
import Button from "../../components/Form/Button";
// import "./style.scss";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: false,
    },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'];

export const data = {
  labels,
  datasets: [
    {
      data: [],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const Reports = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <h3 className="page_title mb-4">Reports</h3>
        </div>
      </div>
      <div className="row">
       
        <div className="col-md-12">
          <form className="row g-3">
            <div className="col-4">
              <Multiselect
              options={[{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]}

              displayValue="name"
              />
            </div>
            <div className="col-4">
              <select className="form-select form-control form-control-lg">
                <option value="1"> option</option>
              </select>
            </div>
            <div className="col-auto">
              <Button
                type="submit"
                disabled={loading}
                loading={loading}
                className="btn-primary button_width text-white"
              >
                Apply filter
                </Button>
            </div>
          </form>
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="text-right">

          </div>
        </div>
        <div className="col-md-12">
          <div className="">
            <h4 className="page_sub_title mt-4 mb-3">Survey Count by month</h4>
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
