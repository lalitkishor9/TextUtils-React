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
      navigator.clipboard.writeText(text);
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

    const convertToSpeech = () => {
      let newText = text;
  
      if (newText) {
        const utterance = new SpeechSynthesisUtterance(newText);
        speechSynthesis.speak(utterance);
      }
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
      <button disabled={text.length===0} className="mx-2 my-3 btn btn-primary" onClick={convertUpCase}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="mx-2 my-3 btn btn-primary" onClick={convertLoCase}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="mx-2 my-3 btn btn-primary" onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className="mx-2 my-3 btn btn-primary" onClick={copyText}>Copy Text <i class="fas fa-copy"></i></button>
      <button disabled={text.length===0} className="mx-2 my-3 btn btn-primary" onClick={extraSpace}>Remove Extra Space</button>
      <button disabled={text.length===0} className="mx-2 my-3 btn btn-primary" onClick={convertToSpeech}>Convert to Speech <i class="fas fa-microphone"></i> </button>
      
      </div>
    </div>
    <div className="container my-2 ">
      <h1 className={`label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
      <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Words:    {wordCount}</h5>
      <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Characters(with spaces): {withSpace}</h5>
      <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Characters(without spaces): {withoutSpace}</h5>
      

      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button bg-info bg-gradient collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong className={`label text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ fontSize: "40px" }}>Preview</strong>
      </button>
    </h2>
    <div style={{ backgroundColor: (props.mode === "light" ? "white" : "#042743"), color: (props.mode === "light" ? "black" : "white"), overflowWrap: "break-word", wordWrap: "break-word" }} id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? text : "Enter something to preview it here"}</div>
    </div>
  </div>
</div>
</div>
    
    </>
  );
}
