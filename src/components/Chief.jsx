
import Navbar from './Navbar'
import About from './About'
import Skill from './Skill'
import Experience from './Experience'
import Project from './Project'
import React, { useState } from 'react'
import Education from './Education'
import Contact from './Contact'
import Asidebar from './Asidebar'


export default function Chief() {
    let [theam, setTheam] = useState("Light")
  return (
    <div>
      <Navbar theam={theam} setTheam={setTheam} />
      <Asidebar theam={theam}/>
      <section id='about'><About theam={theam}/></section>
      <section id='skills'><Skill theam={theam}/></section>
      <section id='experince'><Experience  theam={theam}/></section>
      <section id='projects'><Project  theam={theam}/></section>
      <section data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" id='education'><Education  theam={theam}/></section>
      <section id='contact'><Contact  theam={theam}/></section>

    </div>
  )
}
