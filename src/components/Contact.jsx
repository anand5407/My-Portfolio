import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(props) {

  let [info,setInfo]=useState({
    name:"",
    email:"",
    time:new Date().toLocaleTimeString(),
    message:""
  })


  function handleChange(e) {
    const { name, value } = e.target;

    setInfo({...info, [name]: value });
  }


  function sendMail(e){

  e.preventDefault();


  if(
    info.name.trim()==="" ||
    info.email.trim()==="" ||
    info.message.trim()===""
  ){
    alert("Please fill all the fields");
    return;
  }



  emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    info,
    import.meta.env.VITE_PUBLIC_KEY
  )
  .then(()=>{

    alert("Message Sent Successfully");

    setInfo({
      name:"",
      email:"",
      time:new Date().toLocaleTimeString(),
      message:""
    })

  })
  .catch((error)=>{

    console.log(error);
    alert("Failed to send message");

  })

}

  return (
   <>

   <div
   className={`
   min-h-screen
   px-6
   md:px-16
   py-20
   transition-all
   duration-500
   ${
    props.theam==="Dark"
    ?"bg-[#0b0d17] text-white"
    :"bg-gray-100 text-black"
   }
   `}
   >


    <h1 className="text-4xl md:text-6xl font-serif mb-12">
      Contact 
      <span
      className={`
      italic ml-3
      ${
       props.theam==="Dark"
       ?"text-lime-400"
       :"text-green-700"
      }
      `}
      >
        Me
      </span>
    </h1>



    <div
    className="
    flex
    flex-col
    md:flex-row
    justify-between
    gap-8
    md:gap-16
    "
    >



    {/* Contact Details */}

    <div className="w-full md:w-[35%]">


      <div className="
      p-6
      rounded-2xl
      border
      mb-5
      ">
        <a 
        href="anandmishra70057@gmail.com"
        className="text-lg"
        >
          <i class="fa-regular fa-envelope"></i>  anandmishra70057@gmail.com
        </a>
      </div>



      <div className="
      p-6
      rounded-2xl
      border
      mb-5
      ">
        <p>
          <i class="fa-brands fa-whatsapp"></i> / <i class="fa-solid fa-phone"></i>+91 7855845039        </p>
      </div>



      <div className="
      p-6
      rounded-2xl
      border
      mb-5
      ">
        <p>
         <i class="fa-regular fa-house"></i> Rehla, Jharkhand – 822124  
        </p>
      </div>



      <div className="flex gap-5 mt-8">

        <a href=" linkedin.com/in/anand-mishra-59317230a">
         <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/anand5407">
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.instagram.com/__mishra.ji_/?hl=en">
          <i class="fa-brands fa-square-instagram"></i> 
        </a>

        <a href="https://www.facebook.com/profile.php?id=100021506709362">
          <i class="fa-brands fa-facebook"></i>
        </a>

      </div>



    </div>





    {/* Form */}

    <div className="w-full md:w-[55%]">


      <form
      onSubmit={sendMail}
      className="
      flex
      flex-col
      gap-6
      "
      >


        <input
        onChange={handleChange}
        type="text"
        placeholder="Your name ..."
        name="name"
        value={info.name}

        className={`
        p-4
        rounded-xl
        outline-none
        border
        ${
          props.theam==="Dark"
          ?
          "bg-[#111827] border-gray-700"
          :
          "bg-white border-gray-300"
        }
        `}
        />



        <input
        onChange={handleChange}
        type="email"
        placeholder="Your E-mail ..."
        name="email"
        value={info.email}

        className={`
        p-4
        rounded-xl
        outline-none
        border
        ${
          props.theam==="Dark"
          ?
          "bg-[#111827] border-gray-700"
          :
          "bg-white border-gray-300"
        }
        `}
        />




        <textarea

        onChange={handleChange}
        name="message"
        placeholder="Enter your message..."
        value={info.message}

        className={`
        p-4
        rounded-xl
        h-40
        outline-none
        border
        ${
          props.theam==="Dark"
          ?
          "bg-[#111827] border-gray-700"
          :
          "bg-white border-gray-300"
        }
        `}
        ></textarea>



        <button
        type="submit"
        className={`
        px-8
        py-4
        rounded-xl
        font-semibold
        transition-all
        hover:scale-105
        ${
          props.theam==="Dark"
          ?
          "bg-lime-400 text-black hover:shadow-[0_0_25px_#A3E635]"
          :
          "bg-green-700 text-white hover:shadow-[0_0_20px_#15803d]"
        }
        `}
        >

        Send Message

        </button>



      </form>



    </div>



    </div>


   </div>

   </>
  )
}