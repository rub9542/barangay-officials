import Accordion from 'react-bootstrap/Accordion';
import './dataCollector.scss'
import ResponsiveBreakpoints from './surveyTable';
function ViewData() {
  const basic={
    "Name":'Arthur',
    "Date of birth":'04-04-1984',
    "Age":'40',
    "Gender":'Phone number',
    "Phone number":'9090906543',
    "Email ID":"Arthur@gmail.com"
  } 
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>View Details</Accordion.Header>
        <Accordion.Body>
         <div className='basic-div'>
          <div className='basic-div-left'>
          {Object.entries(basic).map(item => {
           return(
              <div className='basic-item'>
                <div className='basic-key'>{item[0]}</div>
                <div className='basic-value'>{item[1]}</div>

              </div>
            )
          })}
          </div>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Survey Details</Accordion.Header>
        <Accordion.Body>
         <ResponsiveBreakpoints/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ViewData;