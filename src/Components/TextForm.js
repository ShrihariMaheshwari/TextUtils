import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }    

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }    

    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text has been cleared","success")
    }  

    const handleOnChange = (event)=>{
       setText(event.target.value)
    }    

    const handleCopy = ()=>{ 
        navigator.clipboard.writeText(text)
        props.showAlert("Text has been copied","success")
    }

    const [text, setText] = useState('');
        return (
            <>
                <div className="container" style = {{color :props.mode === 'dark'?'white':'#042743'}}>
                    <h1 className='mb-3'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value = {text} onChange = {handleOnChange} 
                        style = {{backgroundColor :props.mode === 'dark'?'#13466e':'white', color :props.mode === 'dark'?'white':'#042743'}} 
                        id="myBox" rows="10"></textarea>
                    </div>
                    <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                    <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear The Text</button>
                    <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy To Clipboard</button>
                </div>
                <div className="container my-3" style = {{color :props.mode === 'dark'?'white':'#042743'}}>
                    <h2>Your Text Summary</h2>
                    <p>It has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
                </div>
            </>
        )
}


 
