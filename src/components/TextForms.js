import React,{useState} from "react";
export default function TextForm(props) {
    const [text,setText]=useState("Here is your text");
    const isEmpty=text.trim().length === 0;
    const wordCount = isEmpty ? 0 : text.split(" ").length;
    const convertUpCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const convertLoCase=()=>{
      let newText=text.toLowerCase();
      setText(newText);
    }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    const clearText=()=>{
      setText("");
    }
    const copyText=()=>{
      let text=document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text.value);
    }
  return (
    <>
    <div className="container">
      <div className="mb-3 ">
        <h1>{props.heading} </h1>
        <textarea  className="form-control" onChange={handleOnChange} aria-label="With textarea" value={text} id="myBox" rows="8"></textarea>
      </div>
      <div >
      <button className="mx-2 my-3 btn btn-primary" onClick={convertUpCase}>Convert to UpperCase</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={convertLoCase}>Convert to LowerCase</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={clearText}>Clear Text</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={copyText}>Copy Text</button>
      </div>
    </div>
    <div className="container my-2 ">
      <h1 className="d-flex justify-content-center ">Your Text Summary</h1>
      <h5 className="d-flex justify-content-center ">Words:    {wordCount}</h5>
      <h5 className="d-flex justify-content-center ">Characters: {text.length}</h5>
      <h2 >Preview</h2>
      <p>{text}</p>
    </div>
    
    </>
  );
}
