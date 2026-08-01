// import React from 'react'
// import Avatar from "../assets/Gemini_Generated_Image_fzl68mfzl68mfzl6-removebg-preview.png"

// export default function Avatr() {
//   return (
//     <>
//     <img src={Avatar} alt="Avatar" />
//     </>
//   )
// }
import React from 'react'
import Avatar from "../assets/Gemini_Generated_Image_fzl68mfzl68mfzl6-removebg-preview.png"

export default function AvatarImage() {
  return (
    <img 
      src={Avatar}
      alt="Avatar"
      className="
      w-[420px]
      select-none
      pointer-events-none
      drop-shadow-[0_0_35px_rgba(163,230,53,0.35)]
      "
    />
  )
}