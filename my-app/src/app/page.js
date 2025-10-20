'use client'

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';


const HomePage = () => {

   const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);


  return (
     <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar/>

      <Hero/>
      <Projects/>
      <Contact/>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 NimaRahnamaDev. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}

export default HomePage