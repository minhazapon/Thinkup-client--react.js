import { useEffect } from "react";
import { useState } from "react";
import DeatilsN from "./DeatilsN";



const Next = () => {

    const [ next, setNext ] = useState([])


    useEffect( () =>{
      
        fetch('http://localhost:5000/nextData')
        .then( res => res.json())
        .then( data => setNext(data) )


    } , [])

    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">

        <div className=" grid  md:grid-cols-3 gap-5 ">
            {
                next.map( next => <DeatilsN next={next} ></DeatilsN>  )
            }
        </div>
        
    </div>
    );
}; 

export default Next;