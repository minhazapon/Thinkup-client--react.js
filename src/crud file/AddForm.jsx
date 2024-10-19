import { Link } from "react-router-dom";


import Swal from "sweetalert2";


const AddForm = () => {



    const handleAdd = e =>{

       e.preventDefault();

       const form = e.target
       const question = form.question.value 
       const answer = form.answer.value 
       const all = { question, answer }
       console.log(all)

       fetch('http://localhost:5000/queData', {

         method: 'POST',
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
            title: 'added done!',
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
                <p className=" text-6xl text-blue-900 font-serif text-center">Add Your Question & Ans</p>
                <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/3409/3409564.png" alt="" />
             </div>

             {/* ------------------------------ */}
             

            <div className=" flex justify-center mt-10">
            <div>
             <form onSubmit={handleAdd} >
               <input placeholder="Question" name="question" required className=" h-[50px] w-[400px] p-5 border-[1px] border-blue-900 " type="text" />
               <br></br>
               <input placeholder="Answer" name="answer" required className=" h-[50px] w-[400px] p-5 mt-5 border-[1px] border-blue-900 " type="text" />
               <br></br>
               <button className=" h-[50px] w-[400px] btn bg-blue-900 text-white mt-5  " >AddQue</button>
             </form>
             </div>
            </div> 




            <div className=" flex justify-between items-center gap-2 ">
            <p className=" text-5xl font-serif flex  items-center gap-2 text-blue-800 mt-10 ">Your Added Question
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </p>
             <div>
             <Link to='/read' >
             <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-900 rounded-full shadow-md group">
             <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-900 group-hover:translate-x-0 ease">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </span>
             <span class="absolute flex items-center justify-center w-full h-full text-blue-900 transition-all duration-300 transform group-hover:translate-x-full ease">View</span>
             <span class="relative invisible">View</span>
             </a>
             </Link>
             </div>
            </div>

           
            
        </div>
    );
};

export default AddForm;