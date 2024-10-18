

import DetailsJ from "./DetailsJ";
import { useQuery } from "@tanstack/react-query";


const JavaScript = () => {



    const { data: query } = useQuery({
        queryKey:['query'],
        queryFn: async () =>{
           const res = await fetch('http://localhost:5000/javascriptData')
           return res.json();
        }
      })
 


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">

            <div className=" grid  md:grid-cols-3 gap-5">

                   {
                    query?.map( user => <DetailsJ user={user}></DetailsJ>  )
                   }
               

            </div>
            
        </div>
    ); 
};

export default JavaScript;