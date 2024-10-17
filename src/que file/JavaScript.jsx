

import { useEffect, useState } from "react";
import DetailsJ from "./DetailsJ";






const JavaScript = () => {

    const [user, setUser] = useState([])

    useEffect( () =>{
       
        fetch('http://localhost:5000/javascriptData')
        .then(res => res.json())
        .then( data => setUser(data) )


    } , [])

    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">

            <div className=" grid  md:grid-cols-3 gap-5">

                   {
                    user.map( user => <DetailsJ user={user}></DetailsJ>  )
                   }
               

            </div>
            
        </div>
    ); 
};

export default JavaScript;