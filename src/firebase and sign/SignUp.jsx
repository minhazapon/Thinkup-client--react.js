


const SignUp = () => {





    return (
        <div>

        <div className=" mb-10 mt-10 ml-10 mr-10">
        
        <div className=" flex justify-center">
        
        
        <div className="  w-full max-w-md p-8 space-y-3 rounded-xl  bg-gradient-to-r from-[#2bddd4] to-blue-900 text-gray-100">
        
        
        <h1 className="text-4xl  font-serif text-center">Sign Up</h1>
        <form onSubmit={handleUp} className="space-y-6">
            
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Email</label>
                <input  placeholder="Email" name="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" type="email"  id="" />
            </div>
        
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-400">Password</label>
                <input  type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
            </div>
            
            <input  className="block w-full p-3 text-center rounded-sm text-gray-900 bg-white btn  " type="submit" value="Sign Up" />
        </form>
        </div>
         </div>
        </div>
                    
                </div>
    );
};

export default SignUp;