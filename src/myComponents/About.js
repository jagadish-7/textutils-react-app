import React, {useState} from 'react'
// import '../App.css';

export default function About() {



    // let enableDark = {
    //     color:"white",
    //     backgroundColor: "black"
    // }

    const [enableDark, setEnableDark] = useState({
        color:"black",
        backgroundColor: "white"
    });
    

    const [BtnText, setBtnText] = useState("Enable dark mode")

    const toggleDarkLight = ()=>{
        if (enableDark.color == 'black') {
            setEnableDark({
                color:"white",
                backgroundColor: "black"
            });
            
        setBtnText("Enable Light mode");
        }
        else{
            setEnableDark({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }


    return (
        <div className='container my-3' style={enableDark}>
            <link rel="stylesheet" href="./app.css" />
            <h1 className='container my-3 text-center'>About Us</h1>

            <div className="accordion" id="accordionExample" style={enableDark}>
                <div className="accordion-item" style={enableDark}>
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={enableDark}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={enableDark}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={enableDark}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={enableDark}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={enableDark}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={enableDark}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <button className="btn btn-primary my-4" onClick={toggleDarkLight}>{BtnText}</button>
            </div>
        </div>
    )
}
