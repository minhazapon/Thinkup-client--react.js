import { Link } from "react-router-dom";



const Explore = () => {

    return (
        <div className=" mt-20 mb-10 ml-10 mr-10">

            <div>
               
               <div>
                  <p className=" text-center font-serif text-4xl ">Explore Top ||  
                     <span className=" text-green-600 ">Categories</span>  <span className=" text-cyan-400">Technology</span> 
                    || Question</p>

                    <p className=" mt-5 font-thin text-center text-xl  text-gray-500 ">
                  "You can't connect the dots looking forward; you can only connect them looking backward."
                  – Steve Jobs
                  </p>  
               </div>


               <div className=" mt-16 flex justify-center ">
                  <div className=" grid  md:grid-cols-4 gap-5">
                    
                    <Link to='/javascript' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-blue-100 ">
                        <img className=" h-[50px] rounded-md " src="data:image/png;base64,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" alt="" />
                        <p className=" font-serif ">Que: JavaScript</p>
                    </div>
                    </Link>
                  
                    
                    <Link to='/typescript' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-pink-100 ">
                        <img className=" h-[50px] rounded-md " src="https://web.programming-hero.com/home/_next/static/media/Typescript_logo_2020.02d0f52e.svg" alt="" />
                        <p className=" font-serif ">Que: TypeScript</p>
                    </div>
                    </Link>
                    

                    <Link to='/react'>
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-yellow-100 ">
                        <img className=" h-[50px] rounded-md "  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                        <p className=" font-serif ">Que: React.Js</p>
                    </div>
                    </Link>
                    

                    <Link to='/next' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-cyan-100 ">
                        <img className=" h-[50px] rounded-md "  src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" alt="" />
                        <p className=" font-serif ">Que: Next.Js</p>
                    </div>
                    </Link>
                   

                    <Link to='/node' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-orange-100 ">
                        <img className=" h-[50px] rounded-md " src="https://www.step2gen.com/WebsiteAssets/assets/images/nodejs.svg"  alt="" />
                        <p className=" font-serif ">Que: Node.js</p>
                    </div>
                    </Link>
                   

                    <Link to='/express' >

                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-blue-100 ">
                        <img className=" h-[20px] rounded-md " src="https://web.programming-hero.com/home/_next/static/media/express-js-icon.3ac94aa3.svg" alt="" />
                        <p className=" font-serif ">Que: Express</p>
                    </div>
                    
                    </Link>
                   
                     
                    <Link to='/mongodb' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-cyan-100 ">
                        <img className=" h-[50px] rounded-md " src="https://web.programming-hero.com/home/_next/static/media/mongodb-icon.f56f34f3.svg" alt="" />
                        <p className=" font-serif ">Que: mongoDB</p>
                    </div>
                    </Link>
                    
                    
                    <Link to='/mongoose' >
                    <div className=" rounded-xl flex items-center gap-5 hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-pink-100 ">
                        <img className=" h-[50px] rounded-md " src="https://web.programming-hero.com/home/_next/static/media/Mongoose.js.db4c7187.svg" alt="" />
                        <p className=" font-serif ">Que: mongoose</p>
                    </div>
                    </Link>
                   
                    

                    <Link to='/redux' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-green-100 ">
                        <img className=" h-[50px] rounded-md " src="https://web.programming-hero.com/home/_next/static/media/Redux.3c411e0e.svg" alt="" />
                        <p className=" font-serif ">Que: Redux</p>
                    </div>
                    </Link>
                   

                    <Link to='/postgres'>
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-purple-100 ">
                        <img className=" h-[50px] rounded-md " src="https://web.programming-hero.com/home/_next/static/media/PostgresSQL.990339a4.svg" alt="" />
                        <p className=" font-serif ">Que: PostgresSQL</p>
                    </div>

                    </Link>
                   
                    <Link to='/docker' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-red-100 ">
                        <img className=" h-[50px] rounded-md " src="https://seeklogo.com/images/D/docker-logo-6D6F987702-seeklogo.com.png" alt="" />
                        <p className=" font-serif ">Que: Docker</p>
                    </div>
                    </Link>
                   

                    <Link to='/aws' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-cyan-100 ">
                        <img className=" h-[50px] rounded-md " src="https://banner2.cleanpng.com/20190418/qty/kisspng-amazon-web-services-logo-cloud-computing-amazon-co-logoaws-1-itnext-summit-1713897691932.webp" alt="" />
                        <p className=" font-serif ">Que: AWS</p>
                    </div>
                    </Link>
                   
                     
                    <Link to='/graphql' >
                    <div className=" rounded-xl flex items-center gap-5  hover:border-[5px] border-black h-[150px] w-[250px] p-5  bg-blue-100 ">
                        <img className=" h-[50px] rounded-md " src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" alt="" />
                        <p className=" font-serif ">Que: GraphQL</p>
                    </div>
                    </Link>
                   



                  </div>
               </div>





            </div>
            
        </div>
    );
};

export default Explore;