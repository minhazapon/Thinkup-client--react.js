import { useQuery } from "@tanstack/react-query";
import DetailsMongoose from "./DetailsMongoose";



const Mongoose = () => {

    const { data: query } = useQuery({

       queryKey: ['query'],
       queryFn: async () =>{
          
          const res = await fetch('https://thinkup-server-express-js.onrender.com/mongooseData')
          return res.json();

       } 

    })


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10 flex justify-center ">

            <div className=" grid  md:grid-cols-3 gap-5 ">
               
               {
                  
                  query?.map( query => <DetailsMongoose query={query} ></DetailsMongoose> )

               }

            </div>
            
        </div>
    );
};

export default Mongoose; 