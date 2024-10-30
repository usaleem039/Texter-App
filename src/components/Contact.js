import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contact(props) {
  return (
    <div className="container" style={{width:"50%",borderRadius:"20px",backgroundColor: props.mode==='success'?'#388e3c':'#212121',color:'white'}} >
        <h3 style={{textAlign:'center',paddingTop:'1rem'}}>Contact Us</h3>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <Button className='mx-2' variant={`outline-${props.mode}`} style={{backgroundColor:'white',marginBottom:'1rem'}} type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Contact;