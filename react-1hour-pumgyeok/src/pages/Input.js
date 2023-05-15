import React, {useState} from 'react';
const Fcaa = () =>{
    const [txtValue, setTextValue] = useState("");
    
   const onChange=(e)=> {
    setTextValue(e.target.value)

   };

    return (
        <div>
          <input type="text" value={txtValue} onChange={onChange}></input>
          <br></br>
          <p>{txtValue}</p>
        </div>
    )
}
export default Fcaa;