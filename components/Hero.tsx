"use client"

import Image from "next/image"
import  {CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Find your furry soulmate — Adopt a cat and change a life
        </h1>

        <p className="hero__subtitle">
        Enhance your Cat Adoption journey with our simplified documentation process.
        </p>

        <CustomButton
          title="Explore Cats"
          containerStyles="bg-orange-400 text-white rounded-full mt-10 "
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image 
          src='https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg'
          fill alt="hero image" priority className="object-contain opacity-85"/>
        </div>
      </div>
    </div>
  )
}

export default Hero