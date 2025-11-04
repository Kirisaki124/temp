import React, {useState} from "react";

const ChildComp = () => {
    const [input, setInput] = useState("");
    return <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
    </div>
}

export default ChildComp;