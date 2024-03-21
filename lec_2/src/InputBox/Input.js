import { useState } from "react";
function Input()
{
    const [data,setData] = useState('');
    const [print,setprint] = useState(false);

    function getData(val)
    {
        setData(val.target.value);
    }
    return(
        <div>
            {
                print ? <h1>{data}</h1> : null
            }
            <input type="text" onChange={getData}></input>
            <button onClick={()=>setprint(true)}>ADD</button>
        </div>
    )
}
export default Input