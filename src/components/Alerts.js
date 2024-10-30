import Alert from 'react-bootstrap/Alert';

function Alerts(props) {
  return (
    
      
        props.alert && <div className="container"> <Alert  variant={`${props.mode}`}>
         <strong> {props.alert.type}</strong> : {props.alert.msg}
        </Alert>
        </div>
  
  );
}

export default Alerts;