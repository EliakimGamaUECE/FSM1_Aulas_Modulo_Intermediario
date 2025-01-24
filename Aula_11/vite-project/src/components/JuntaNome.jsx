import { useState } from "react";

function MudaNum () {

    const [num,setNum] = useState(0)

    // function juntaNome() {
    //     setNome(nome + " Gama")
    // }

    return(
        <>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num + 1)}>Contador</button>
        </>
    )

}

export default MudaNum