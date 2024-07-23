"use client";

import Link from "next/link";
import Image from "next/image";

import {CustomButton,ContactForm} from "@/components";
import { useState } from "react";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return(
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center no-underline'>
        <Image
          src='https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg'
          alt='logo'
          width={50}
          height={5}
          priority
          className='object-contain rounded-full'
        />
        <span className="text-3xl font-semibold text-black">Meow</span><span className="text-orange-400 text-3xl font-bold">Mates</span>
      </Link>
        <CustomButton
          title='Contact Us'
          btnType='button'
          containerStyles='text-white rounded-full bg-orange-400 min-w-[130px]'
          handleClick={() => setIsOpen(true)}
        />
    </nav>
    <ContactForm 
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
    />
  </header>
  );
};

export default NavBar;