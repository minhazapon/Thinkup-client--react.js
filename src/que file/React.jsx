import { useEffect } from "react";
import { useState } from "react";
import DetailsR from "./DetailsR";




const React = () => {
    

    const [ react, setReact ] = useState([])


    useEffect( () =>{
      fetch('http://localhost:5000/reactData')
      .then( res => res.json())
      .then( data => setReact(data) )
    } , [])


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-5">

                 {
                    react.map( react => <DetailsR react={react} ></DetailsR> )
                 }


            </div>
            
        </div>
    );
};
 
export default React;