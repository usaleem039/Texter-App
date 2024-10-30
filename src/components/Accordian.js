import Accordion from 'react-bootstrap/Accordion';

import Contact from './Contact';





function Accordian(props) {
  return (
    <>
    <div className='container my-5' >
    <Accordion style={{border:'2px dotted',borderColor:props.mode==='success'?'#388e3c':'#212121',borderRadius:'10px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header ><strong> Introduction & Purpose</strong> </Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='success'?'#388e3c':'#212121',color:'white'}}>
          Texter is a web-app used to manipulate the text according to your need.
          It has alot of functions which you can you to edit your text.
          <br /><br />
          Texter App is developed to assist users in performing different operations on text, such as changing case, reversing, sorting, searching, and more.
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header  ><strong>Features & Benefits </strong></Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='success'?'#388e3c':'#212121',color:'white'}}>
        The ability to convert text to uppercase or lowercase, reverse the order of characters, sort text alphabetically or in a custom order, search for specific words or phrases, and remove formatting.
        <br /><br />
        The benefits of using Texter is that it can save time and effort by automating text manipulation tasks, making it easier to format and modify text according to specific requirements.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>How to Use:</strong>  </Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='success'?'#388e3c':'#212121',color:'white'}}>
        Its simple to use as all the buttons have a name of their functions writen on it. <br />
        <strong>ToUppercase       :</strong> It capitalizes all the text in the field. 
        <br />
        <strong>ToLowercase       :</strong> It converts the text into small alphabets in the field. 
        <br />
        <strong>ToReverse         :</strong> It reverses the words alphabets.
        <br />
        <strong>SortAlphabetically:</strong>It sorts the words alphabetically like A--Z
        <br />
        <strong>SearchWord        :</strong> It search for a specific words and underlines it if it is present in 
        the text.
        <br />
        <strong>RemoveFormatting   :</strong> It removes formatting which is already on the text.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

    <div className="container">
      <Contact mode={props.mode}/>
    </div>
  


    </>
  );
}

export default Accordian;