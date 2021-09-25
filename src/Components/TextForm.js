import { useState } from "react"
import React  from 'react'

export default function TextForm(props) {
    // States are hooks to set the varaiables to new values
    const [text,setText]=useState(" ");
    const handleOnClick=() =>{

        // console.log(text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case ","success")
    }

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    
    return (
        <>
        <div>
            <h1 style={{color:props.mode==='light'?'black':'white'}} >{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'grey' }}  className="form-control" value={text} onChange={handleOnChange} name="" id="" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleOnClick}>Convert To Upper Case</div>

        </div>
        <div className="container my-3">
            <h1 style={{color:props.mode==='light'?'black':'white'}} >Preview</h1>
            <p style={{color:props.mode==='light'?'black':'white'}}>{text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        </>

    )
}
