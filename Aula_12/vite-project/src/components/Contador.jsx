import { useState } from "react";

function Contador () {

    const [num,setNum] = useState(0)

    return (
        <>
            <h1>{num}</h1>
            <button onClick={()=>setNum(num + 1 )}>Incrementar</button>
        </>
    )

}

export default Contador