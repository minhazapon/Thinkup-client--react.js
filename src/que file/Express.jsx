import { useQuery } from "@tanstack/react-query";
import DetailsEx from "./DetailsEx";



const Express = () => {

    const { data: query } = useQuery({

        queryKey:['query'],
        queryFn: async () =>{

          const res = await fetch('http://localhost:5000/expressData') 
          return res.json();   

        }

    })



    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-5 ">
              
               {
                query?.map( query => <DetailsEx query={query} ></DetailsEx> )
               }

            </div>
            
        </div>
    );
};

export default Express; 