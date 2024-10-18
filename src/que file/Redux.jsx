import { useQuery } from "@tanstack/react-query";
import DeatilsRED from "./DeatilsRED";



const Redux = () => {
    
    const { data: query } = useQuery({

       queryKey: ['query'],
       queryFn: async () =>{

          const res = await fetch('http://localhost:5000/reduxData')
          return res.json()

       }
    })


    return (
        <div className=" mt-10 mb-10  ml-10 mr-10 flex justify-center ">

          <div className=" grid  md:grid-cols-3 gap-5 ">
             {
                query?.map( query => <DeatilsRED query={query} ></DeatilsRED> )
             }
          </div>
            
        </div>
    );
};

export default Redux; 