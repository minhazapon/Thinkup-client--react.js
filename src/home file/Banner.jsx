import { Link } from "react-router-dom";


const Banner = () => {

    return (
        <div className=" ">

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://www.afternerd.com/blog/wp-content/uploads/2018/03/The-Coding-Interview-from-start-to-finish.png)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className=" bg-gradient-to-r from-black p-2 rounded-md ">
                  <h1 className="mb-5 text-5xl text-white font-thin ">Find the most exciting Interview Questions</h1>
                  <p className="mb-5 font-thin text-white ">
                  "You can't connect the dots looking forward; you can only connect them looking backward."
                  – Steve Jobs
                  </p>
                  <div>
                   <Link to='/explore' >
                   
                    <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">All Questions</span>
                    <span class="relative invisible">All Questions</span>
                    </a>
                   
                   </Link> 
                 
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Banner;