"use client";
import { useState } from "react";
import Image from "next/image";
import { CatProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCatPrice, getCatImage } from "@/utils";
import CatDetails from "./CatDetails";

interface CatCardProps {
  cat: CatProps;
}

const CatCard = ({ cat }: CatCardProps) => {
  const {
    id,
    name,
    life_span,
    adaptability,
    child_friendly,
    energy_level,
    grooming,
    reference_image_id,
  } = cat;

  const catPrice = calculateCatPrice(
    adaptability,
    child_friendly,
    energy_level,
    grooming
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
    
        <h2 className="flex min-w-full text-[20px]">
       
          <div className="flex justify-between min-w-full">
            <div className="font-black">{name}</div>
            <div className="text-green-600 font-medium">{catPrice}<span className="font-black">$</span> </div>
          </div>
        </h2>
 

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={getCatImage(cat)}
          fill
          priority
          className="object-contain"
          alt="dog_image"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="car-card__btn-container mt-10">
          <CustomButton
            title="View More ->"
            containerStyles="w-full py-[16px] rounded-full bg-orange-400 mt-100"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CatDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        cat={cat}
      />
    </div>
  );
};

export default CatCard;
