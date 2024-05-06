import React,{useState} from "react";

export default function TextArea(props) {
    const [text,setText] = useState("...")
    const handleOnClick =()=>{
        //console.log("upper btn clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnClickLow =()=>{
        //console.log("upper btn clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnClearText =()=>{
        //console.log("upper btn clicked");
        let newtext = ''
        setText(newtext);
    }
    
    const handleOnChange =(e)=>{
       // console.log("on change");
        setText(e.target.value)
    }

  return (
    
    <>
    <div className="my-3">
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <label className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control" onChange={handleOnChange} value={text}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to Uppercase </button>
      <button className="btn btn-primary mx-1" onClick={handleOnClickLow}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleOnClearText}>Clear Text</button>
      
    </div>
    <div className="container my-2 ">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>It will take {0.008 *text.split(" ").length} minutes to read</p>
    </div>
    </>
  );
}
