// import React from 'react'
// import profile from '../assets/20250409021737992.jpg'


// export default function Navbar(props) {
  
//   return (
//    <>
//       <div>
//         <div><img src={profile} alt="profilrpic" /></div>
//        <button onClick={()=>{props.theam==='Light' ?props.setTheam('Dark'):props.setTheam('Light')}}>{props.theam}</button>
//         <nav>
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#skills">Skills</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>
//            <div>
//              <a href="#contact"><button>Hire me</button></a>
//            </div>
//         </nav>
//       </div>
//    </>
//   )
// }


        import React, { useEffect, useState } from 'react'
import profile from '../assets/20250409021737992.jpg'
import AOS from 'aos'

export default function Navbar(props) {

  const [active, setActive] = useState("about")
  const [showProfile, setShowProfile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if(entry.isIntersecting){
            setActive(entry.target.id)
          }

        })

      },
      {
        threshold: 0.5
      }
    )


    sections.forEach((section)=>{
      observer.observe(section)
    })


    return ()=>{
      sections.forEach((section)=>{
        observer.unobserve(section)
      })
    }

  },[])


  let links = [
    {name:"About", id:"about"},
    {name:"Skills", id:"skills"},
    {name:"Experince", id:"experince"},
    {name:"Projects", id:"projects"},
    {name:"Education", id:"education"},
    {name:"Contact", id:"contact"}
  ]

  const handleNavClick = () => {
    setTimeout(() => {
      AOS.refreshHard()
    }, 120)
  }


  return (
    <>


    <div
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
        props.theam === "Dark"
        ? "bg-transparent text-white border-white/10"
        : "bg-transparent text-black border-black/10"
      }`}
    >

      <div className="flex items-center justify-between gap-3 px-4 py-2 md:px-6">

        {/* Left */}
        <div className="flex items-center gap-3 md:gap-4">


          <img
            src={profile}
            alt="profilepic"
            onClick={()=>setShowProfile(true)}
            className="
            w-10 h-10 
            rounded-full 
            object-cover 
            cursor-pointer 
            hover:scale-110 
            transition-all 
            duration-300
            "
          />


          <button
            onClick={()=>{

              props.theam==="Light"
              ? props.setTheam("Dark")
              : props.setTheam("Light")

            }}
            className="
            px-3 py-1.5 
            rounded-full 
            bg-lime-400 
            text-black 
            text-sm 
            font-semibold
            hover:scale-105 
            transition
            "
          >
            {props.theam}
          </button>

        </div>



        {/* Navigation */}

        <nav
        className="
        hidden
        md:absolute 
        md:left-1/2 
        md:-translate-x-1/2 
        md:flex 
        md:gap-8 
        md:font-medium
        "
        >

          {
            links.map((link)=>(

              <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick}
              className={`
              transition-all duration-300
              ${
                active===link.id
                ?
                "text-lime-400 scale-110"
                :
                "hover:text-lime-400 hover:-translate-y-1"
              }
              `}
              >

                {link.name}

              </a>

            ))
          }


        </nav>



        {/* Hire */}

        <a href="#contact" className="hidden md:block">

          <button
          className="
          bg-lime-400 
          text-black 
          px-5 py-2 
          rounded-xl 
          text-sm 
          font-semibold
          hover:scale-105
          hover:shadow-[0_0_20px_#A3E635]
          transition-all
          "
          >
            Hire me
          </button>

        </a>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="
          md:hidden
          flex
          flex-col
          gap-1.5
          p-2
          rounded-lg
          border
          border-lime-400/60
          text-lime-400
          "
          aria-label="Toggle navigation menu"
        >
          <span className="block h-0.5 w-5 rounded-full bg-current"></span>
          <span className="block h-0.5 w-5 rounded-full bg-current"></span>
          <span className="block h-0.5 w-5 rounded-full bg-current"></span>
        </button>

      </div>


      {/* Mobile Navigation */}
      {
        mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-4">
            <div className="flex flex-col gap-3 text-sm font-medium">
              {
                links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      handleNavClick()
                    }}
                    className={`transition-all duration-300 ${
                      active === link.id
                        ? "text-lime-400"
                        : "hover:text-lime-400"
                    }`}
                  >
                    {link.name}
                  </a>
                ))
              }

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="
                mt-2
                inline-flex
                w-fit
                bg-lime-400
                text-black
                px-4 py-2
                rounded-xl
                text-sm
                font-semibold
                "
              >
                Hire me
              </a>
            </div>
          </div>
        )
      }

    </div>



    {/* Profile Popup */}

    {
      showProfile && (

        <div
        onClick={()=>setShowProfile(false)}
        className="
        fixed 
        inset-0 z-100
        flex 
        items-center 
        justify-center
        bg-black/70
        backdrop-blur-md
        "
        >


          <img
          src={profile}
          alt="large profile"
          onClick={(e)=>e.stopPropagation()}
          className="
          w-80
          h-80
          rounded-full
          object-cover
          border-4
          border-lime-400
          shadow-[0_0_50px_#A3E635]
          animate-in
          zoom-in
          duration-300
          "
          />


        </div>

      )
    }


    </>
  )
}