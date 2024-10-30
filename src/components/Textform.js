import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';




function Textform(props) {

  // USESTATES
  const [text, setText] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [isCopied, setIsCopied] = useState(false);



  //FUNCTIONS

  const handleOnChange = (event) => {
    console.log("Onchange clicked");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("upper clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text Converted to Uppercase','Successfully')
  };
  const handleLowerClick = () => {
    console.log("Lower clicked");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text Converted to Lowercase','Successfully')
  };
  const handleClearClick = () => {
    console.log("Clear clicked");
    const newText = "";
    setText(newText);
    props.showAlert('Text has been Cleared','Successfully')
  };
  const handleTitleClick =()=>{
    const newText= text.replace(/\b\w/g, (match) => match.toUpperCase());
    setText(newText)
    props.showAlert('Text Converted to TitleCase','Successfully')
  }
  const handleReverseClick =()=>{
    const newText = text.split("").reverse().join("")
    setText(newText)
    props.showAlert('Text has been Reversed','Successfully')
  }
  const handleAlphabeticallyClick=()=>{
    const newText = text
    .split(" ")
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
    setText(newText)
    props.showAlert('Text is now sorted Alphabetically','Successfully')
  }
  const handleSearchClick=()=>{
    const results = text.split(" ").map((word) => {
      const isMatch = word.toLowerCase().includes(searchTerm.toLowerCase());
      return { word, isMatch };
    });
    setSearchResults(results);
    props.showAlert('Write in the field to search any word','Search')
  }
  const noMatchesFound = searchTerm.trim() === "" || searchResults.every((result) => !result.isMatch);
  
  const handleFormatClick=()=>{
    const selectedText = window.getSelection().toString();

    if (selectedText) {
      // Use appropriate DOM manipulation methods or libraries to remove formatting
      // For example, if using document.execCommand:
      document.execCommand("removeFormat");
    } else {
      // Clear formatting for the entire text
      // Update the state to remove formatting
      setText(text => {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
      });
    }
    props.showAlert('Formatting is removed','Successfully')
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    props.showAlert('Text has been copied!','Successfully')
  };

  const handleSpacesClick = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
    props.showAlert('ExtraSpaces has been removed from text.','Successfully')
  };


  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;


  

  return (
    <>
    <div className="container" style={{width:'80%'}}>
      <Form>
        {/* passing heading prop from app.js */}
        <h1>{props.heading}</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
          style={{backgroundColor: props.mode==='success'?'white':'#212121',color: props.mode==='success'?'black':'white'}}
            as="textarea"
            value={text}
            onChange={handleOnChange}
            rows={8}
            placeholder="Enter Text here"
            
          />
        </Form.Group>

        <Form className="d-flex container" >
            <Form.Control
              style={{backgroundColor: props.mode==='success'?'white':'#212121',color: props.mode==='success'?'black':'white' , width:'18rem'}}
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
             
              type="search"
              placeholder="Write specific word"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSearchClick} variant={`outline-${props.mode}`}>&lArr;Search Any Word</Button>
          </Form>

        <div className="container">
        <button type="button" className={`btn btn-outline-${props.mode} my-2`} onClick={handleUpClick}>
          To UpperCase
        </button>
        <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={handleLowerClick}>
          To LowerCase
        </button> 
        <button type="button" className={`btn btn-outline-${props.mode} `} onClick={handleClearClick}>
          To ClearText
        </button>
        <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={handleTitleClick}>
          To TitleCase
        </button>
        <button type="button" className={`btn btn-outline-${props.mode} `} onClick={handleReverseClick}>
          To ReverseText
        </button>
        <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={handleAlphabeticallyClick}>
        Sort Words Alphabetically
        </button>
        <button type="button" className={`btn btn-outline-${props.mode} `} onClick={handleFormatClick}>
          Clear Formatting
        </button>
        <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={handleCopyClick}>
        Copy Text
        </button>
        <button type="button" className={`btn btn-outline-${props.mode} `} onClick={handleSpacesClick}>
          Remove Extraspaces
        </button>
        </div>


        <div className="container my-3">
        
          <div className="container">
        <h4>Search Results:</h4>
        {noMatchesFound ? (
          <p>No matches found</p>
        ) : (
          <p style={{border:'2px dotted black',width:'70%'}}>
            {searchResults.map(({ word, isMatch }, index) => (
              <React.Fragment key={index}>
                <span style={{ textDecoration: isMatch ? " 2px underline red" : "none" }}>
                  {word}
                </span>{" "}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
        </div>
        
        
      </Form>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          <strong>{wordCount}</strong> words and <strong>{text.length}</strong>{" "}
          characters
        </p>
        <p>
          Approximately <strong>{0.008 * wordCount}</strong>{" "}
          minutes you needed to read this text
        </p>
        <div className="container" >
          <h2>Preview</h2>
          <p style={{border:'2px dotted black',width:'70%'}}>{text}</p>
        </div>
      </div>

      </div>

    </>
  );
}

export default Textform;
