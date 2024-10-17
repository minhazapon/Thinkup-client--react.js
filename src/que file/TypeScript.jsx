
import { useEffect, useState } from "react";
import DeatilsT from "./DeatilsT";



const TypeScript = () => {

    const [ type, setType ] = useState([])


    useEffect( () =>{

       fetch('http://localhost:5000/typescriptData')
       .then( res => res.json())
       .then( data => setType(data) )

    } , [])
 


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-5 ">

                  {

                  type.map( type =>  <DeatilsT type={type} ></DeatilsT> )

                  }

            </div>
            
        </div>
    );
};

export default TypeScript; 