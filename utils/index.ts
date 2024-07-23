import { CatProps } from "@/types";

export async function fetchCat(){
    const headers=
         {
            'X-API-Key': 'live_2OLNnzj7DSZGZ5J6JIMEgvcS78en56HbsZ5pddGCchKxeVnx8z5U76yhuXndWfjZ',
            'X-API-Host': 'api.thecatapi.com'
    }
    const response = await fetch (`https://api.thecatapi.com/v1/breeds`,{
        headers:headers,
    });
    const result=await response.json()
    return result;
}

export const calculateCatPrice=(
    adaptability: number,
    child_friendly: number,
    energy_level: number,
    grooming:number,
    )=>{
        const baseprice=50;
        const adaptability_factor=2;
        const child_friendly_factor=8;
        const energy_level_factor=3;
        const grooming_factor=4;

        const totalAdoptionRate=baseprice+adaptability*adaptability_factor+child_friendly*child_friendly_factor+energy_level*energy_level_factor+grooming*grooming_factor;
        
    return totalAdoptionRate;
}

export const getCatImage=(cat:CatProps)=>{
    const {reference_image_id}=cat;
    const url =new URL(`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`)
    return `${url}`
}



