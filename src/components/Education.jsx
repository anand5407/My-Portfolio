import React from 'react'
import EducationArr from '../components/EducationArr'
import EducationAvtar from '../components/EducationAvtar'

export default function Education(props) {
  return (
    <>

      <div 
        className={`min-h-screen px-6 md:px-16 pb-16 pt-20 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 transition-all duration-500 ${
          props.theam === "Dark"
          ? "bg-[#0b0d17] text-white"
          : "bg-gray-100 text-black"
        }`}
      >

        {/* Left Section - Heading + Avatar */}
        <div className="w-full md:w-[35%] flex flex-col items-start md:sticky md:top-28">

          <h1 
            className={`text-4xl md:text-6xl font-serif mb-8 md:mb-10 ${
              props.theam === "Dark"
              ? "text-white"
              : "text-black"
            }`}
          >
            My Education
          </h1>


          {/* Avatar */}
          <div 
            className="w-full flex justify-center"
          >
            <EducationAvtar/>
          </div>

        </div>



        {/* Education Cards */}
        <div className="w-full md:w-[65%] space-y-8">

          {
            EducationArr.map((obj,index)=>{
              return(

                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={index * 50}
                  data-aos-offset="10"
                  data-aos-once="true"
                  className={`rounded-3xl border p-5 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                    props.theam === "Dark"
                    ? "bg-[#141a27] border-gray-700 hover:border-lime-400/40"
                    : "bg-white border-gray-300 shadow-lg hover:border-green-700/40"
                  }`}
                >

                  <h3 
                    className="text-xl md:text-2xl font-bold mb-3"
                  >
                    {obj.institute}
                  </h3>


                  <p 
                    className={`mb-2 ${
                      props.theam === "Dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                    }`}
                  >
                    {obj.degree}
                  </p>


                  <p 
                    className={`mb-2 ${
                      props.theam === "Dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                    }`}
                  >
                    {obj.branch}
                  </p>


                  <p 
                    className={`mb-2 ${
                      props.theam === "Dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                    }`}
                  >
                    {obj.duration}
                  </p>


                  <p 
                    className={`font-semibold ${
                      props.theam === "Dark"
                      ? "text-lime-400"
                      : "text-green-700"
                    }`}
                  >
                    {obj.score}
                  </p>


                </div>

              )
            })
          }

        </div>


      </div>

    </>
  )
}