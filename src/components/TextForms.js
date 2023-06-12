import React,{useState} from "react";
export default function TextForm(props) {
    const [text,setText]=useState("");
    const isEmpty=text.trim().length === 0;
    const wordCount = isEmpty ? 0 : text.split(" ").length;
    const convertUpCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const convertLoCase=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");

    }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    const clearText=()=>{
      setText("");
      props.showAlert("Text cleared","success");

    }
    const copyText=()=>{
      let text=document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");

    }
    const extraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces rempved","success");

    }
  return (
    <>
    <div className="container">
      <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter the text to analyse</h1>
      <div className="mb-3 ">
        <h1>{props.heading} </h1>
        <textarea  className="form-control" style={{backgroundColor:(props.mode==="light"?"white":"#042743"), color:(props.mode==="light"?"Black":"white")}} onChange={handleOnChange} aria-label="With textarea" value={text} id="myBox" rows="8"></textarea>
      </div>
      <div >
      <button className="mx-2 my-3 btn btn-primary" onClick={convertUpCase}>Convert to UpperCase</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={convertLoCase}>Convert to LowerCase</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={clearText}>Clear Text</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={copyText}>Copy Text</button>
      <button className="mx-2 my-3 btn btn-primary" onClick={extraSpace}>Remove Extra Space</button>
      </div>
    </div>
    <div className="container my-2 ">
      <h1 className={`d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
      <h5 className={`d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>Words:    {wordCount}</h5>
      <h5 className={`d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>Characters: {text.length}</h5>
      <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
      <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    
    </>
  );
}
