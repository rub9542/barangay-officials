import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./style.scss"

const PageBreadcrumb = ({ breadcrumb_lists }) => {
  return (
    <Breadcrumb className='custom_breadcrumb'>
    {breadcrumb_lists.map(function(val, key){
      return(
        <div className='bread-item'>
          {key !== 0 ? 
          <div className='bread-slash'>/</div>: null  
        }
          {val.link === "" ?
          <h4 className="page_title">
            <Breadcrumb.Item >{val.heading}</Breadcrumb.Item>
          </h4>
          :
          <h4 className="page_title">
            <Breadcrumb.Item href={val.link} active>
              {val.heading}
            </Breadcrumb.Item>
          </h4>
          }
        </div>
      )
    })}
    </Breadcrumb>
  );
}

export default PageBreadcrumb;