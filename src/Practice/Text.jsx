import React, {useState, useEffect} from 'react'

const Text = () => {
    // state
    const [text, setText] = useState("");

    // useEffect
    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        };
    }, []);

    return (
        <div>
            <input onChange={(e) => {setText(e.target.value)}}/>

            <h1>{text}</h1>
        </div>
  )
}

export default Text