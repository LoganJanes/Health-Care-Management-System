'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Header() {
    const router = useRouter(); 
    
        const handlePatient = () => {
          
          router.push("/patient"); };

        const handleHome = () => {
            router.push("/homepage");
        };
    return (
        <div>
        <div className="flex flex-wrap items-center justify-between w-max">
        <h1 className="text-4xl font-bold text-center">HealthCare</h1>
        <button className= "ml-8" onClick={(e) => {
                  e.preventDefault();
                  handleHome();
                }}>
                     Home</button>

        <button className= "ml-8" onClick={(e) => {
                  e.preventDefault();
                  handlePatient();
                }}>
                     Patient Info</button>
      </div>
      <div>
        <h1> Streamline Medical Record Storage! </h1>
      </div>
      </div>
      
    );
  }