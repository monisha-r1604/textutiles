import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    //it will enable the textarea to accept the character
    const textAreadConChange=(event)=>{
        
        setText(event.target.value)
    }
    const clearText=(event)=>{
        
       let newclear='';
       setText(newclear)
    }
    function handleLowClick(){
        let lowerText=text.toLocaleLowerCase();
        setText(lowerText)
    }
   
    const[text, setText]=useState('')
    //text="we cannot change the value of variable like this in react"// wrong way to change the variable value in react.
//setText('ENTER YOUR INPUT HERE')// RIGHT WAY TO CHANGE THE VALUE OF VARIABLE IN REACT
  return (

<>
<div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="3" onChange={textAreadConChange}  style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743'}} value={text}></textarea>
  </div>

    <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
  
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowerCase</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>

    

  </div>
  <div className="container my-3"  style={{color:props.mode === 'dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} 3432 character and the entered lenght in textarea is {text.length} </p>
    <p>{0.008 * text.split(" ").length} minutes to read </p>
    <h2> Preview</h2>
    <p>{text.length>0?text:"Enter text to preview"}</p>

  </div>
  </>

  )
}
