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
import "./style.scss";
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
const DashBoard = () => {


  return (
    <div>
      <div className="row">
        <div className="col-md-6">
            <h3 className="page_title">Dashboard</h3>
        </div>
        <div className="col-md-6 text-right">
          <div className="text-right">
            <select className="w-50 form-select mt-0 me-0 mb-0 ms-auto" aria-label="Default select example">
              <option value='0'>Select Barangay</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4 className="page_sub_title mt-4 mb-3">Overview</h4>
        </div>
        <div className="col-md-3 col-sm-6 col">
          <div className="dashboard_box">
            <p className="box_title">Data Collectors</p>
            <h1 className="box_count">20</h1>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col">
          <div className="dashboard_box">
            <p className="box_title">Data Collectors</p>
            <h1 className="box_count">20</h1>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col">
          <div className="dashboard_box">
            <p className="box_title">Data Collectors</p>
            <h1 className="box_count">20</h1>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col">
          <div className="dashboard_box">
            <p className="box_title">Data Collectors</p>
            <h1 className="box_count">20</h1>
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

export default DashBoard;
