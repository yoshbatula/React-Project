import { useState } from "react";

function Hooks() {

    const [color, setColor] = useState("blue");
    return (
        <>
        <div>
            <h1>My favorite color is {color}</h1>
        </div>
        <div>
            <button className="bg-white text-red" onClick={() => setColor('red')}>Red</button>
        </div>
        </>
    );
}

export default Hooks;