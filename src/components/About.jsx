import { useState } from "react"

const About=(props)=>{

  
return (
<div className="container" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>

 <h1 className="my-3">About textUtils</h1>

 <div className="accordion" id="accordionExample">
 <div className="accordion-item">
  <h2 className="accordion-header">
  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
   aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>Text Analysis</button> </h2>

  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  <div className="accordion-body" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>
  <b>TextUtils helps users analyze their text efficiently.</b>
  It provides instant statistics such as word count, character count, and estimated reading time, 
  making it easier to understand and optimize content.</div> </div>
  </div>

  <div className="accordion-item">
  <h2 className="accordion-header">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
  aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>Text Transformation</button> </h2>

 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
 <div className="accordion-body" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>
 <b>Modify your text with a single click.</b>
  Convert text to uppercase or lowercase, remove extra spaces, copy text to the clipboard,
  and clear the text area quickly and effortlessly.</div> </div>
  </div>

  <div className="accordion-item">
  <h2 className="accordion-header">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
   aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>Modern User Experience</button> </h2>

  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
   <div className="accordion-body" style={{backgroundColor:props.mode==='light' ? 'white' : 'black', 
color:props.mode==='light' ? 'black' : 'white'
}}>
   <strong>Built for simplicity and productivity.</strong>TextUtils features a clean, responsive interface with Dark
    Mode and Light Mode support, ensuring a smooth experience across desktop and mobile devices.</div> </div> </div>
</div>

</div>
)}

export default About;