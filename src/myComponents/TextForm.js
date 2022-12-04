
import React, { useState } from 'react';

export const TextForm = (props) => {



    //*****************Function to Convert in uppercase********************

    const handleUppercase = ()=>{
        // console.log("handleUpcase is fired" + text);
        let newUpper = text.toUpperCase();
        let Wordcount = text.length
        console.log("Len is " + Wordcount);
        setText(newUpper);
    }


    //***************************Function to convert in Lowercase**************************
    const handleLowercase = ()=>{
        // console.log("handleUpcase is fired" + text);
        let newLower = text.toLowerCase();
        setText(newLower);
    }



    //***********This function will reflext the changes in our textBOX************* */
    const upperOnChange = (e)=>{
        // console.log("this is onchange method")
        setText(e.target.value);
    }

    const [text, setText] = useState("Enter your text here");

    let timeToRead = 0.008 * text.split(" ").length;


    return (
        <>
        <div className='container'>
            <h1 className='container text-center'>{props.heading}</h1>

            {/* <h4 className='container text-center'>{text}</h4> */}
            <div className="mb-3 container">
                <label for="exampleFormControlTextarea1" className="form-label">Lowercase to uppercase converter</label>
                <textarea className="form-control" value={text} onChange={upperOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className='container'>

            <button type="button" className="btn btn-primary" onClick={handleUppercase}>Convert to UPPERCASE</button>
            <button type="button" className="btn btn-danger mx-3" onClick={handleLowercase}>Convert to lowercase</button>

            
            </div>
        </div>

        <div className="container">
            <h1 className='my-2'>Your Text summary</h1>
            <p className='my-2'><b>Number of words:</b> {text.split(" ").length}</p>
            <p className='my-2'><b>Number of Characters:</b> {text.length}</p>
            <p className='my-2'><b>Time to read(<i>in minutes</i>):</b> {timeToRead} minutes</p>

            
            <h2 className='my-2'>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
