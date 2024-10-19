import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {


    const update = useLoaderData();


    const {_id, question, answer} = update


    const handleUpdate = e =>{

        e.preventDefault();
 
        const form = e.target
        const question = form.question.value 
        const answer = form.answer.value 
        const all = { question, answer }
        console.log(all)
 
        fetch(`http://localhost:5000/queData/${_id}`, {
 
          method: 'PUT',
          headers:{
             'content-type': 'application/json'
          },
          body: JSON.stringify(all)
        })
        .then( res => res.json())
        .then( data => {
          console.log(data)  
 
          if(data){
             
           Swal.fire({
             title: 'update done!',
             text: 'Do you want to continue',
             icon: 'success',
             confirmButtonText: 'Cool'
           })
 
           form.reset();
            
          }
        } )
     }
 





    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">


            <div className=" flex items-center justify-center gap-5">
                <p className=" text-6xl text-blue-900 font-serif text-center">Update Your Question & Ans</p>
                <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/3409/3409564.png" alt="" />
             </div>

             {/* ------------------------------ */}
             

            <div className=" flex justify-center mt-10">
            <div>
             <form onSubmit={handleUpdate} >
               <input placeholder="Question" name="question" defaultValue={question} required className=" h-[50px] w-[400px] p-5 border-[1px] border-blue-900 " type="text" />
               <br></br>
               <input placeholder="Answer" name="answer" defaultValue={answer} required className=" h-[50px] w-[400px] p-5 mt-5 border-[1px] border-blue-900 " type="text" />
               <br></br>
               <button className=" h-[50px] w-[400px] btn bg-blue-900 text-white mt-5  " >UpdateQue</button>
             </form>
             </div>
            </div> 

            
        </div>
    );
};

export default Update;