import React,{useState} from "react";
export default function TextForm(props) {
  

    const [text,setText]=useState("");                  //for text area 
    const [withSpace, setWithSpace] = useState(0);      //for no. of character with spaces
    const [withoutSpace, setWithoutSpace] = useState(0);//for no. of character without spaces

    function countWordsWithoutSpaces(paragraph) {
      const trimmedParagraph = paragraph.trim();
      const words = trimmedParagraph.split(" ");
      const filteredWords = words.filter(word => word !== "");
      return filteredWords.length;
    }
    const wordCount = countWordsWithoutSpaces(text);
   
    //onchange handler of textarea
    const handleOnChange=(event)=>{
      setText(event.target.value)
      characterCount(event.target.value);
    }

    //commom usecases
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
    const clearText=()=>{
      setText("");
      props.showAlert("Text cleared","success");
    }
    const copyText=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");
    }
    const extraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces rempved","success");
    }

    //function to count number of character
    const characterCount = (event) => {
      let newText = event.split(/[ ]+/);
      setWithoutSpace(newText.join("").length);
        setWithSpace(event.length);
    };

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
      <h1 className={`label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
      <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Words:    {wordCount}</h5>
      <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Characters(with spaces): {withSpace}</h5>
      <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Characters(without spaces): {withoutSpace}</h5>
      <h2 className={` label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
      <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    
    </>
  );
}
