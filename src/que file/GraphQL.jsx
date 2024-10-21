import { useQuery } from "@tanstack/react-query";
import DetailsGraphql from "./DetailsGraphql";



const GraphQL = () => {

    const { data: query } = useQuery({
       
        queryKey: ['query'],
        queryFn: async () =>{
         
            const res = await fetch('https://thinkup-server-express-js.onrender.com/graphqlData')
            return res.json();

        }

    })


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-5 ">
                {
                    query?.map( query => <DetailsGraphql query={query} ></DetailsGraphql> )
                }
            </div>
            
        </div>
    ); 
};

export default GraphQL;