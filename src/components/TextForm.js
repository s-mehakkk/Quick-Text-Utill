import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.makeAlert("changed to upper case", "success");
    }
    const handleLoClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        const newText = "";
        setText(newText);
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const calcWithoutSpace = ()=>{
        let withoutSpace = text.replace(/\s/g, "");
        return withoutSpace.length;
    }
    return (
        <>
        <div className={`m-4 text-${props.mode==='light'? 'dark': 'light'}`} >
            <label htmlFor="textarea" className="form-label"><h3>{props.title}</h3></label>
            <textarea className={`form-control ${props.mode==='light'? 'lightArea': 'darkArea'}`} id="textarea" placeholder='Enter text here' style={ {backgroundColor : props.mode ==='light'? 'white' : '#6c757d', color: props.mode ==='light'? 'black' : 'white'} } value={text} onChange={handleChange} rows="6"></textarea>
            <button type="button" className="btn btn-secondary my-3" onClick={handleUpClick}>Convert to upper case</button>
            <button type="button" className="btn btn-secondary my-3 mx-2" onClick={handleLoClick}>Convert to lower case</button>
            <button type="button" className="btn btn-secondary my-3 mx-2" onClick={handleClear}>Clear Text</button>
            
            <div>
                <p>word count: {text.split(" ").length}</p>
                <p>character count: {text.length}</p>
                <p>character count(without spaces) : {calcWithoutSpace()} </p>
            </div>
        </div>
        </>
    )
}
