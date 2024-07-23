"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({  containerStyles,isDisabled,  title, textStyles,  handleClick }: CustomButtonProps) => {
  return( 
  <button 
  disabled={isDisabled}
  type={"button"}
    className={`custom-btn ${containerStyles}  `}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>
    {title}
    </span>

  </button>
  )
  
};

export default CustomButton;
