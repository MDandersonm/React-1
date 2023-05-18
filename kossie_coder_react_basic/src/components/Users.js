import React, { useEffect } from "react";
import axios from 'axios';
const Fcc = () => {
    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) =>{
                console.log(res)
            })
    })
    return(
        <div>
            Users1
        </div>
    );
  
};
export default Fcc;
