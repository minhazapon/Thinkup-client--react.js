import Swal from "sweetalert2";


const Footer = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);

    formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Send Message Successfully!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      event.target.reset();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      setResult(data.message);
    }
  };


    return (
      <div>

        <div>
            <hr></hr>
        </div>

<footer className=" footer footer-center bg-white text-primary-content p-10">

    
<div className=" ">
<form onSubmit={onSubmit} >
  
  <div className=" flex justify-center items-center gap-5">
    <img className=" h-[100px]" src="https://cdn-icons-png.flaticon.com/128/10211/10211870.png" alt="" />
    <p className=" font-serif text-4xl  text-blue-800 ">Thinkup</p>
    
  </div>
  <div>
        <p className=" text-blue-800 font-serif text-2xl">Do you need help <br></br>
        anything?</p>
    </div>

  <fieldset className="form-control w-80 mt-5 ">
    <div className="join text-black font-thin ">
      <input
        type="text"
        placeholder="Send Message For Help"
        name="message"
        required
        className="input  border-[1px] border-blue-900 join-item" />
       <button className="btn bg-blue-900 text-white border-[1px] border-blue-800 join-item">Send Message</button>
    </div>
  </fieldset>
</form>
</div>
  
  
</footer>

<footer className="footer bg-blue-900 text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>This Site Created By - Minhazul Abedin Apon</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.facebook.com/profile.php?id=100011336918123" >
       <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/3955/3955013.png" alt="" />
    </a>
    <a href="https://github.com/minhazapon" >
    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
    </a>
    <a href="https://www.linkedin.com/in/minhazul-abedin-apon-346b52297/" >
    <img className=" h-[30px]" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
    </a>
  </nav>
</footer>

        
      </div>
);
};

export default Footer;





