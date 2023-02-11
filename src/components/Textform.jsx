 import React,{useState} from 'react'
export default function Textform(props) {
    const [content,setContent]=useState("");
    const colour = props.mode ? "light" : "dark";
    function change(event)
    {
        setContent(event.target.value);
    }
    function upperCase()
    {
      setContent(content.toUpperCase());
      props.utils("success","Converted to Upper Case");
    }
    function clear()
    {
        setContent("");
        props.utils("success","Text Cleared");
    }
    function copy()
    {
      navigator.clipboard.writeText(content);  //API 
      props.utils("success","Text Copied to clipboard");
    }
    function spaces()
    {
      setContent(content.replace(/\s+/g," "));
      props.utils("success","Extra spaces removed");
    }
    //content=content.trim()
    //+ means 1 or more and * 0 or more
// The / symbol in a regular expression is used to define the start and end of the pattern.
// For example, in the expression /\s+/g, the / symbol marks the start and end of the pattern \s+. The \s is a shorthand character class that matches any white space character (e.g. spaces, tabs, and line breaks), and the + means that one or more of these characters can appear together. The g at the end of the expression is a global flag, which means that the pattern will be searched for globally in the string, and not just the first occurrence.
  return (<> <div className={`form-floating text-${colour}`} style={{margin:"10px"}}>
  <h2>Enter text to analyze</h2>
  <textarea className="form-control" placeholder="Enter text here" id="floatingTextarea2" style={{backgroundColor:colour==="light"?"#3c6692":"white",color:colour==="light"?"white":"black"}} value={content} onChange={change}></textarea>
  <label for="floatingTextarea2"></label>
  <button type="button" className={`btn btn-outline-${colour} mx-1 my-1`} onClick={upperCase}>Change to Uppercase</button>
  <button type="button" className={`btn btn-outline-${colour} mx-1 my-1`} onClick={clear}>Clear text</button>
  <button type="button" className={`btn btn-outline-${colour} mx-1 my-1`} onClick={copy}>Copy text</button>
  <button type="button" className={`btn btn-outline-${colour} mx-1 my-1`} onClick={spaces}>Remove extra spaces</button>
<h1 className={`my-2`}>Your text summary</h1>
<span>{
  content.split(" ").filter((element)=>{return element.length!==0 }).length} words and {content.length} characters</span>
<div>{0.008*content.split(" ").filter((element)=>{return element.length!==0 }).length.toFixed(4)} minutes read</div>
</div>
</>
  )
}
/* text="     "
var arr=text.split(" ")
arr.length;     5
arr[0].length   0
text="  hi  hi "
var arr=text.split(" ")
arr.length;     5
console.log(arr);
["", "", "hi", "", "hi", ""]
0: ""
1: ""
2: "hi"
3: ""
4: "hi"
5: ""

 */
