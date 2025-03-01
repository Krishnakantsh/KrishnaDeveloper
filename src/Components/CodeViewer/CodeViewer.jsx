import React,  { useState } from 'react'


export default function CodeViewer({data}) {

    const codes = {
        html: `<div>Hello, World!</div>`,
        css: `div { color: red; }`,
        js: `console.log('Hello, World!');`
    };
    


    const [currentCode, setCurrentCode] = useState(`${data.htmll}`);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const showCode = (code) => {
        setCurrentCode(code);
    };


    
    const copyCode = () => {
        if (currentCode) {
            navigator.clipboard.writeText(currentCode).then(() => alert("Code Copied!"));
        }
    };

    return (
        <div className="h-fit w-full border border-white rounded-xl bg-gray-100 flex flex-col items-center">
            {/* Navbar */}
            <nav className=" bg-black text-white w-full flex justify-between items-center rounded-xl p-4">
                
                <div className="flex gap-3 flex-grow justify-end">
                    {isExpanded && (
                        <>
                            <button className=" text-white px-4 py-2 border border-white rounded" onClick={() => showCode(`${data.htmll}`)}>View HTML</button>
                            <button className=" text-yellow-300 px-4 py-2 rounded border border-yellow-300" onClick={() => showCode(`${data.csss}`)}>View CSS</button>
                            <button className=" text-green-400 px-4 py-2 rounded border border-green-400" onClick={() => showCode(`${data.jss}`)}>View JavaScript</button>
                            <button className=" text-red-500 px-4 py-2 rounded border border-red-500 " onClick={copyCode} disabled={!currentCode}>Copy Code</button>
                        </>
                    )}
                    <button className=" px-4 py-2 text-green-400 rounded border  border-[rgb(0,255,0)] hover:border-2 hover:border-white  hover:text-white ml-auto" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "Hide Code" : "Show Code"}
                      
                    </button>
                </div>
            </nav>

            {/* Code Textarea */}
            {isExpanded && (
                <div className="flex flex-col items-center w-full  text-yellow-600" >
                    <textarea
                        className="w-full p-3 h-72 rounded shadow-md border-0 focus:outline-none  focus:ring-blue-400"
                        value={currentCode}
                        readOnly
                        onFocus={(e) => e.target.select()}
                    />
                </div>
            )}
        </div>
    );
}
