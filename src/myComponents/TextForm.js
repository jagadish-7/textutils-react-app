
import React, { useState } from 'react';

export const TextForm = (props) => {



    //*****************Function to Convert in uppercase********************
    const handleUpperCase = () => {
        // console.log("handleUpcase is fired" + text);
        let newUpper = text.toUpperCase();
        setText(newUpper);
        if(text ===  '')
        {
            props.showAlert("Enter the text below!", "warning");
        }
        else{

            props.showAlert("Converted to Uppercase!", "success");
        }
    }


    //***************************Function to convert in Lowercase**************************
    const handleLowerCase = () => {
        // console.log("handleUpcase is fired" + text);
        let newLower = text.toLowerCase();
        setText(newLower);
        
        props.showAlert("Converted to Lowercase!", "success");
    }





    //***************************Function to convert into Pascal case**************************

    const handlePascalCase = () => {
        let outStr = "";
        text.split(" ").map((v) => {
            outStr += v[0].toUpperCase() + v.slice(1);
        })
        setText(outStr)
        
        props.showAlert("Converted to pascal case!", "success");
    }








    //***************************Function to convert into Pascal case**************************
    const handleCamelCase = () => {
        let outStr = "";
        text.split(" ").map((v, index) => {
            if (index === 0) {
                outStr = v;
            }
            else {

                outStr += v[0].toUpperCase() + v.slice(1);
            }
        })
        setText(outStr);
        
        props.showAlert("Converted to Camelcase!", "success");
    }






    //***************************Function to handle copy to clipboard function**************************
    const handleCopy = () => {
        let myText = document.getElementById("exampleFormControlTextarea1");
        myText.select();
        navigator.clipboard.writeText(myText.value);
        
        props.showAlert("Copied to clipboard!", "success");
    }




    const handleExtraSpaces = () => {
        let removeSpaces = text.split(/[ ]+/);
        let rem = removeSpaces.join(" ");
        setText(rem);
        
        props.showAlert("Extra spaces removed!", "success");
    }







    //***************************Function to handle ClearText**************************
    const handleClearText = () => {
        // console.log("handleUpcase is fired" + text);
        let text = '';
        setText(text);
        
        props.showAlert("Text cleared!", "success");
    }




    //***********This function will reflext the changes in our textBOX************* */
    const upperOnChange = (e) => {
        // console.log("this is onchange method")
        setText(e.target.value);
    }






    const [text, setText] = useState("");




    let timeToRead = 0.008 * text.split(" ").length;


    return (
        <>
            <div className='container' style={{ color: props.switchMode === 'dark' ? 'white' : 'black' }}>
                <h1 className='container text-center'>{props.heading}</h1>

                {/* <h4 className='container text-center'>{text}</h4> */}
                <div className="mb-3 container" >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Util components</label>
                    <textarea className="form-control" placeholder='Enter your text Here' style={{ backgroundColor: props.switchMode === 'dark' ? '#121212' : 'white', color: props.switchMode ==='dark'?'white':'black' }} value={text} onChange={upperOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <div className='container'>



                    {/* buttons */}
                    <button type="button" className="btn btn-primary btn-sm" onClick={handleUpperCase}>Convert to UPPERCASE</button>
                    <button type="button" className="btn btn-danger mx-3 my-3 btn-sm" onClick={handleLowerCase}>Convert to lowercase</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={handlePascalCase}>Convert to PascalCase</button>
                    <button type="button" className="btn btn-success mx-3 my-3 btn-sm" onClick={handleCamelCase}>Convert to camelCase</button>
                    <button type="button" className="btn btn-warning  btn-sm" onClick={handleCopy}>Copy to Clipboard</button>
                    <button type="button" className="btn btn-info my-3 btn-sm mx-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleClearText}>Clear Text</button>



                </div>


            </div>

            <div className="container" style={{ color: props.switchMode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-2'>Your Text summary</h1>
                <p className='my-2'><b>Number of words:</b> {text.split(" ").length}</p>
                <p className='my-2'><b>Number of Characters:</b> {text.length}</p>
                <p className='my-2'><b>Time to read(<i>in minutes</i>):</b> {timeToRead} minutes</p>


                <h2 className='my-2 text-center'>Preview</h2>
                <p>{text.length>0?text: "Enter something in the above text to see the preview here..."}</p>
                <br /><br /><br />
                <hr />

            </div>
        </>
    )

}

