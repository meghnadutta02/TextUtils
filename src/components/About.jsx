import React, { useState } from "react";

export default function About(props) {
    let myStyle={
      backgroundColor:props.moded?"#3c6692":"white",
      color:props.moded?"white":"black",
      border:"1.5px solid "
    }
  return (
    <div style={{color:(props
    .moded)?"white":"black"}} className="p-2"> 
    <h2>About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button delete"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong> Improve Your Text with Our User-Friendly Text Utility</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body delete" style={myStyle}>
            Welcome to our text utility app, where you can easily analyze and improve your text! Our app provides you with a range of features, including text analysis, case conversion, and text copying to the clipboard.

With our text analysis feature, you can input any text and get a report on various aspects of it, such as the word count, character count, number of unique words, reading level, and more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Completely free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body " style={myStyle}>
            Our app is completely free to use, so you can analyze and improve your text without any cost. Our goal is to provide you with a tool that makes it easy for you to analyze and improve your text, and we believe that this app will be valuable to you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser compatibility </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" >
            We understand the importance of providing a great user experience, which is why we have made sure that our app is compatible with different browsers. You can use our app on any browser, and it will work seamlessly, providing you with the best possible experience.
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
