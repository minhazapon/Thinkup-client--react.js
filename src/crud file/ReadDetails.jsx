import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ReadDetails = ({query}) => {

    const { _id, question, answer } = query



    const handleDelete = delete_id =>{


        console.log(delete_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          
             
             fetch(`http://localhost:5000/queData/${_id}`, {
               
                method: 'DELETE',


             })
             .then( res => res.json())
             .then( data => {
                 
                console.log(data)

                if(data.deletedCount  > 0){

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
             } )

            }
          });
    }


    return (
        <div>

            <div className=" hover:border-[1px] border-cyan-300 card bg-base-100 h-[300px] w-[400px] shadow-xl">
              <figure>
              </figure>
              <div className="card-body">
                <h2 className="card-title"> Que: {question} </h2>
                <p>Ans: {answer} </p>
                <div className="card-actions justify-end mt-5">

                  <button onClick={() => handleDelete(query._id)} className="btn  bg-blue-900 text-white font-thin ">Delete</button>
                  
                  <Link to={`/update/${_id}`} >
                   <button className="btn  bg-blue-900 text-white font-thin ">Update</button>
                  </Link>
                

                </div> 
              </div>
            </div>
            
        </div>
    );
};

export default ReadDetails;