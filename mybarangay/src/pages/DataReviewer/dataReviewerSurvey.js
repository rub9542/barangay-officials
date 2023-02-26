import React,{useState,useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import drop from '../../assets/images/drop_icon.png';
import PendingSurvey from "../BarangaySurvey/PendingSurvey";
import "./style.scss";
import Button from "../../components/Form/Button";
import FormModal from "../../components/FormModal";
// import useDropzone  from "react-dropzone";
function DataReviewerSurvey() {
  const [newOCR, showNewOCR]= useState(false)
//     const accept="image/*"
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept
//   });
//     const onDrop =useCallback(acceptedFiles => {
//         // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
//         console.log(acceptedFiles);
//       }, []);
 
const handleChange = (e) =>{
    // do something with event data
console.log('e',e.target.files[0])
  }
  
    const fileInputRef=useRef();
    return (
    <div className="survey-content">
      <div className="survey-header">
        <h4 className="page_title">Survey</h4>
        <Button onClick={()=>showNewOCR(true)} type="submit" className="btn-primary button_width text-white">
          New OCR Survey
        </Button>
        
      </div>
      <div className="survey_data_wrapper">
        <nav className="custom_nav">
          <ul>
            <li>
              <NavLink to="/data-reviewer-survey">Assigned Surveys</NavLink>
            </li>
            <li>
              <NavLink to="/data-reviewer/survey1">Ongoing Surveys</NavLink>
            </li>
            <li>
              <NavLink to="/data-reviewer/survey2">Rejected Surveys</NavLink>
            </li>
            <li>
              <NavLink to="/data-reviewer/survey3">Completed Surveys</NavLink>
            </li>
          </ul>
        </nav>
        <div className="survey_data">
          <PendingSurvey />
        </div>
      </div>
      <FormModal show={newOCR} onClose={() =>showNewOCR(false)} heading="Add new OCR survey">
        
        <button onClick={()=>fileInputRef.current.click()} className="model-div">
        {/* <img src={drop}/> */}
        <i className="fa fa-solid fa-cloud-arrow-up"></i>
        <span className="modal-btn-text text1">Drag & Drop</span>
        <span className="modal-btn-text text2">Your file is here or <a style={{color:'#0086B6'}}>Browse file</a></span>

        </button>
        <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file'hidden/>
        <div className="text-end">
          <Button
            type="button"
            className="btn-default text-blacksix me-3"
            onClick={() => showNewOCR(false)}
          >
           Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {}}
            className="btn-primary text-white"
          >
            Upload
          </Button>
        </div>
      </FormModal>
    </div>
  );
}

export default DataReviewerSurvey;
