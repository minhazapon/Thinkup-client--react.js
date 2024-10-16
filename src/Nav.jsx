import { Link, NavLink } from "react-router-dom";



const Nav = () => {

   const navZ = <>
   
   
     <li className=" text-black "><NavLink to='/javascript' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="data:image/png;base64,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" alt="" /> <p className=" font-serif text-xs ">JavaScript</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/typescript' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://web.programming-hero.com/home/_next/static/media/Typescript_logo_2020.02d0f52e.svg" alt="" /> <p className=" font-serif text-xs ">TypeScript</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/react' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" /> <p className=" font-serif text-xs ">React.js</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/next' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4AbyUgWdCURTGs62QQAIJoKgI5C0BkwKgCCBKqGyEABREJABK/QsLQQHw9h8U0rASopCkoPS+na5bRq13e20dfnB993yf9849OsF6IpzEG9EkPoklseMs+VmTa5z8zs31SDwTNWJIbAmosOXaGr/7qNXcSpSJGQGNzHgP67XmEvFBKARuROG9JFHzF2JA4I8ZsN4qJWk2Fw8hXfrnMoF/Rj43Ew98WHAnytzzWD5iescAU+55fOvVSxfcbjfS6TQymQwkSbrY3OfzMa3f71cLUT3sCBcxvCBkDQ/V6/Xgcrl+1RYKBSwWCxSLRbUAX8ybr86tUABerVYLZrP5rDabzaLb7SKXy4lszFeC7W+IBBiPx5hMJlAUBaVSCXq9/kQbj8fRbreRTCZFZuGd0A0EA7DGqVQK6/Uaq9UKsVjsRBuJRFCv1xGNRkX3gm55TQCTyYRKpYJ9jUYjNnQ/tYFAAPl8HsFgUCAA89btRAN0Oh322S0WCwuzL1mWYbPZjlqv14tEIqH6Wji7qwMYDAZ25vF40O/32Xmj0YDRaGTndrsdoVAIDodDOMBSQwBGOBzGfD7HZrP5rr5qQTOEoihPi0UNouJABItG05pgE7EjJu26YDYKhvXeBMtX7GlgsRmX7PYoO+OuM98nwtiDWx+H+3N+0DQNGGMwDOPnTE3T5B7B51UAgiCgbVscx4F935EkCWhEiqJAkiTuJXxcBUAlyzKGYQC9dV3h+/4zlPw4J6ITAFSu62JZFtAjMKqqgtO6vXFQ8TkAqiiKQEu5bRvquoYoitxUzCVGVVUhTdNfP87zHPM8Y5omhGHILUa3yTF1h7o1jiO6roNt21xyfKshoflTt/q+R5ZlxA9chuRWS2ZZFoqiQFmWCIKAzvXUkt1uSh3HQRzHZEygaRqXKb3VlhMrkkZ4ngdd12l5uWz5rcGEWi/L8pckSR+CILz+STRjjL0zxl7+ZTi9Gs/rZ+L5N8AJA23K4ax1AAAAAElFTkSuQmCC" alt="" /> <p className=" font-serif text-xs ">Next.js</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/node' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFDElEQVR4AaXUA6wsXRbF8f9e+1T3M8a2PRMnY9u2bdvh2LatYKxgbHvu430v1+yurnP2V5X7zP5er+S3yj4pcYF58Tcee8+Xfv1J/3nu5x77z8d/6KF3bnEhNO6OL//Bo73Fi775iOu+9FuP/VPy9C0zrrGpX127n9J3elX1217l12yxY9Pm1GIcGnfHtQOemzo+VlXV32W6ERAcyabNvRIlbi6lfyfzDzYlNy3GoXF28suuvaC6zChL9lgDIACMI+kll7tRSglMTzJZLbdntTivc268/PLtqysMDkt6sxkiOGMC6Pd7lFwsRyHCKrB3ynTAzG7d4mx04kK50rS3yJeduTqXX/ipJ/3AjEsDwXniEsmdyIWNmyACLu+mn0j6IcSVW/R6lbc4Sl3tOTRnLfb/tp8pek+q+K+JWwGFjRjnSwTtuckREKWbWpSgRBRht0sp7UnJ31ZKzi0grIW6utaVLxPej/te4RbD2sTTT3hiMWYCwIzkTs5BlEKOoESoBYUw9FyT1j3pHiaihbraPzOzPUb6Ur2sygSAcSEJcBclglLKkSnktiLCSkAy3/Snqakvf/+vv9/883/+3dQWkW1TT96s7OuBBZNGshPeQiEK5AgEHF5cYHF11S69eVefMFNbuHt4UtBUDGYrzJkoZkYhKCUgygnzwZ6Zw0gqa/UggBBA5enIKDbWp/tQgGCyBDS5UErQMRPTCwuMRiMqE47RUVdmIDnuwoqzdriHeTBpcsnkHJTINLnhwMI8pgQYwo5Mu5Lh3hGeRD3Xo4yMSdPkTFMKhHF4aYEcGTMDEzmMwFBXKQnJsCM3InOGsz006VswGNRD6iazuLZCksCgIxcmQ10FILFxcbUSNEsVzVCYTXR9mmiYW1kEcyTHMXTCdnUlceRuQILkYtDU/PMfs3Tzk8WoI9OXcBPyhJQ25uWoKyxAHcNaEkwvz7AwV7OwMEQyJkkQjCJTuajM8JZMOEJdkQpSgAVyY251hUE9IiVjz/8XkYwgJngHxrAZITNcRnLRT06VhLoqyq2CPAhrODA3S5IwMxaXhszOruESkyQiWBvVVJ5IZhjgBuoqR6FRA1Vh/+z8xr+bjaQk/vPfeSJi4r/j+mhIUwquRPKEW0Jd1RqQbcTyYJ2Z+eXTnnZ9fcSBQ8u424Q3AcvDNZI7ddMgqSPW88ByGtnBQ4voDK+6qsTU3jlyDjAmGguj3HRvwq6w/VIkc9RVunRdz82v9tdXM2Zn+n7QNIU9++dx18SfYnGwWi2OVpq59UXU1exvqsX5/fmxcs6a5GLqwBzDusHMJr2JRx9anl+tSw61xcpyY2WoT970Zf8TxmdOfHhOjMG/pg5f3LcQHInMPtUyIj7b5MZaqCttytHiD2+8hmjskebcAPgzYCeexCWmZ5dZHdQX58Jm8Cc3v55benTdNN6ilIgW6uqohia3GNX5b03ON0bcF1g/4UZwGf+Ymh7nF23AALjvlqp/k91btv2jxRV2Xiq3OEpdnc1ltuz+xmW27d6C8YYTvh9zSyvMLa5iGOfIG3qpt3nHpq3faHE26up8rnXJK72aS416GF8DSO78fc8BJOPEx4UgIr661Kz11m346hbno3F2+vfKlLG/nxno/njcAmPP2nDI9PwCkgAoEXtaN3fZA3b6ltxiHBpnpxvsukbc4KpXLmzNhvE7PK4qt0f85+D0qESpcykPN3HVque/D8LaaWkxjosAqoYXqu5e6SUAAAAASUVORK5CYII" alt="" /> <p className=" font-serif text-xs ">Node.js</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/express' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://web.programming-hero.com/home/_next/static/media/express-js-icon.3ac94aa3.svg" alt="" /> <p className=" font-serif text-xs ">Express.js</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/mongodb' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://web.programming-hero.com/home/_next/static/media/mongodb-icon.f56f34f3.svg" alt="" /> <p className=" font-serif text-xs ">mongoDB</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/mongoose' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://web.programming-hero.com/home/_next/static/media/Mongoose.js.db4c7187.svg" alt="" /> <p className=" font-serif text-xs ">Mongoose</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/redux' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://web.programming-hero.com/home/_next/static/media/Redux.3c411e0e.svg" alt="" /> <p className=" font-serif text-xs ">Redux</p> </div></NavLink></li>
     <li className=" text-black "><NavLink to='/postGres' >
     <div className=" flex items-center gap-1"> <img className=" h-[25px] w-[25px] " src="https://web.programming-hero.com/home/_next/static/media/PostgresSQL.990339a4.svg" alt="" /> <p className=" font-serif text-xs ">PostGreSql</p> </div></NavLink></li>
    
    
   
   
   
   
   </>

    
    return (
        <div>

        <div className="navbar  p-3 shadow-md ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navZ}
              </ul>
            </div>
            <div className=" flex items-center gap-2">

              <Link to='/' > 
                 
              <img className=" h-[70px] " src="https://cdn-icons-png.flaticon.com/128/10211/10211870.png" alt="" />
              
              </Link>
            
           
            </div>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {navZ}
            </ul>
          </div>
          <div className="navbar-end">
             
          <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">Sign in</span>
          <span class="relative invisible">Sign in</span>
          </a>

          </div>
        </div>
            
        </div>
    );
};

export default Nav;