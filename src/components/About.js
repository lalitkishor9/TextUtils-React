import React from 'react'

export default function About(props) {
    
  return (
    <div className='container' style={props.myStyle}>
        <h1 className='my-4'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button style={props.myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About creater
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={props.myStyle} className="accordion-body">
        <strong>Hey! welcome to my website. I am <code>Lalit Kishor</code>. I am a problem solver and learning web dev using React.js . I am a student of  NIT Agartala. Persuing B.tech in Computer Science and Engineering. <br></br>NO GREAT ACHIEVEMENT YET...</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={props.myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About web-app
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={props.myStyle} className="accordion-body">
     <strong> Welcome to Text Utils! </strong><br />

<i>Text Utils is a powerful and user-friendly web application built with React that provides a range of useful text manipulation features. Whether you're a writer, student, or simply someone who works extensively with text, our app is designed to make your life easier.</i>
<br /><br />
<strong>Main Features:</strong><br /><br />

<strong>Word and Character Count:</strong><br />
Our app allows you to quickly and accurately count the number of words and characters in your text. Simply paste or type your text into the input field, and the app will instantly display the corresponding counts.
<br /><br />
<strong>Text Editing:</strong><br />
Text Utils provides various text editing options to help you customize your content. You can easily convert text to uppercase or lowercase, making it convenient for situations where specific capitalization is required. Additionally, you can copy the text to your clipboard with just a click, ensuring easy sharing or pasting into other applications.
<br /><br />
<strong>Remove Extra Spaces:</strong><br />
Dealing with excessive spaces can be frustrating and time-consuming. With Text Utils, you can effortlessly eliminate extra spaces from your text. Our app intelligently detects multiple spaces and condenses them into a single space, streamlining your content and ensuring a clean appearance.
<br /><br />
<strong>Clear Text:</strong><br />
<br />
Sometimes, you may want to start fresh and clear the input field. Our app offers a "Clear Text" feature that allows you to remove all the text from the input field with a single click. This enables you to quickly reset your work and begin a new session without any hassle.
<br />
<br />
<br />
<i>Text Utils is designed with a clean and intuitive interface, making it easy for users of all skill levels to navigate and utilize its powerful features. We prioritize speed and efficiency, ensuring that your text manipulations are carried out swiftly, allowing you to focus on your work.</i>
      </div>
    </div>
  </div>
  
    </div>
    </div>
  )
}
