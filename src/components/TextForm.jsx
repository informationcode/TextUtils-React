import { useState } from "react";

const TextForm=(props)=>{

const [text,setText]= useState('');

const handleUpperCase=()=>{
let newText=text.toUpperCase();
setText(newText); }

const handleLowerCase=()=>{
let newText=text.toLowerCase();
setText(newText); }

const handleClearText=()=>{
setText(" ");}

const handleCopyText=()=>{
var text=document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value); }

const handleSpaceRemoveText=()=>{
let newText=text.split(/\s+/);
setText(newText.join(" ")); }

const handleOnChange=(event)=>{
setText(event.target.value); }

 return (
<div className="container my-5" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white' }}>
 <h2>Enter or paste the text you want to analyze below.</h2>
 <div className="mb-3 my-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
 </div>

<div>
<button type="button" className="btn btn-info mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>
<button type="button" className="btn btn-info mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
<button type="button" className="btn btn-info mx-2" onClick={handleClearText}>Clear Text</button> 
<button type="button" className="btn btn-info mx-2" onClick={handleCopyText}>Copy Text</button> 
<button type="button" className="btn btn-info mx-2" onClick={handleSpaceRemoveText}>Extra space Remove</button> 
</div>

<div className="my-3">
 <h2>Your text summary</h2>
 <p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes read</p>

 <h2>Preview</h2>
 <p>{text.length===0  ? "Enter something in the textbox above to preview it here" : text}</p>
</div>
</div>
 ) }

export default TextForm;