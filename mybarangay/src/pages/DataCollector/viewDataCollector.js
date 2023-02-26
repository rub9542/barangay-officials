import ViewData from './viewDetails'
import  Breadcrumb  from "../../components/Breadcrumb/index";
const ViewDataCollector = () => {
  return (
    <div className="bread_title">
      <Breadcrumb breadcrumb_lists={[{heading:'Data Collector', link:'ssss'}, {heading:'View Details', link:''}]}/>
     <ViewData/>
    </div>
  );
};

export default ViewDataCollector;
