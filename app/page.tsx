import { CatCard, Hero } from "@/components";
import { fetchCat} from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCats =await fetchCat();

  const isDataEmpty= !Array.isArray(allCats) || allCats.length<1 || !allCats;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Cat Catalogue</h1>
          <p>Discover cats you'll love to adopt — Find your perfect companion today.</p>
        </div>
        
      {!isDataEmpty ?(
        <section>
          <div className="home__cars-wrapper">
            {allCats?.
            filter(cat => 
              cat.name !== "Bengal" && 
              cat.name !== "European Burmese" && 
              cat.name !== "Korat" && 
              cat.name !== "Malayan" && 
              cat.name !== "Devon Rex"
            )
            .map(cat => <CatCard cat={cat} />)}
          </div>
        </section>
      ):(
        <section>Oops something went wrong </section>
      )}
      </div>
    </main>
  );
}
