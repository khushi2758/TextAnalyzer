import React,{useState} from 'react'


export default function Textform(props) {
  //"converted to Upper case -------------------------->>
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Upper case !","success")// to pass the alert--------------------->
  }
 // converted to Lower case ------------------------------->>
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lower case !","success")//to pass the alert---------------------->

  }
  //copied the text---------------------------------------->>
  const handleCopy = ()=>{
   var text= document.getElementById("exampleFormControlTextarea1")
   navigator.clipboard.writeText(text.value)
   props.showAlert("copied to clipboard ! ","success")// to pass the alert---------------
  }
  //cleared-------------------------------------------------->>
  const handleClear = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText)
    props.showAlert("cleared !","success")// to pass the alert--------------->
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed the extra space !","success")// to pass the alert---------------
    
}
  
    const handleonChange = (event)=>{
      console.log("on change");
      setText(event.target.value);
  }
 
  const [text, setText] = useState('Enter text here');
  //setText("new text");
  return (
    

 <div className ="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
 <h1>{props.heading}</h1>
 <div className="mb-3" >
 <textarea className="form-control" value={text}  onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'?'rgb(3 44 65 / 84%)':'white',color: props.mode==='dark'?'white':'#042743'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
 </div>
 <button  className="btn btn-primary mx-2 my-1" onClick={ handleUpClick}>convert to upper case</button>
 <button  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to lower case</button>
 <button  className="btn btn-primary mx-2 my-1" onClick={handleClear}>erase</button>
 <button  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
 <button  className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
 <div className="container my-3">
  <h2>Your text summery</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
  <p>{0.008*  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox here to preview here"}</p>
  </div>
  </div>

  );
}
