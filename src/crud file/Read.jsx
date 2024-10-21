import { useQuery } from "@tanstack/react-query";
import ReadDetails from "./ReadDetails";


const Read = () => {

    
    const { data: query } = useQuery({
         queryKey: ['query'],
         queryFn: async () =>{           
            const res = await fetch('https://thinkup-server-express-js.onrender.com/queData')
            return res.json()
         }
    })


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">

            <div className=" grid  md:grid-cols-3 gap-5 ">

                 {
                   
                   query?.map( query =>  <ReadDetails query={query} ></ReadDetails>  )

                 }

            </div>
            
        </div>
    );
};

export default Read;