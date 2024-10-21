import { useQuery } from "@tanstack/react-query";
import DetailsAws from "./DetailsAws";




const AWS = () => {

    const {data: query} = useQuery({


            queryKey: ['query'],
            queryFn: async () =>{
              
                const res = await fetch('https://thinkup-server-express-js.onrender.com/awsData')
                return res.json()

            }

    })




    return (
        <div className=" mt-10 ml-10 mr-10 mb-10 flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-5">



                    {

                       query?.map( query => <DetailsAws query={query} ></DetailsAws> )

                    }






            </div>
            
        </div> 
    );
};

export default AWS;