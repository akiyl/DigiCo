"use client";
import { db } from "@/lib/db";
import PetCOntainer from "@/components/contents/pet-container";
import { stringify } from "querystring";

const Pets = async ({ params }: any) => {
  const petData = await db.pet.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!petData) {
    return <div>Pet not found</div>;
  }

  return (
    <>
      <div>{petData.name}</div>
      <div>{petData.description}</div>
      <div>
        <div className="backdrop-blur-lg bg-grey/70 h-screen w-screen bg-center bg-cover sticky top-0">
          <div className="capitalize text-black sticky top-[10rem] m-9 left-10 items-center whitespace-nowrap flex-col flex gap-16">
            <div className="flex text-[3.5rem] leading-[85px] gap-4 font-semibold">
              <h1>save a life</h1>
              <span className=""> - </span>
              <h1>get a pet</h1>
            </div>
            <div>
              <PetCOntainer
                id={petData.id}
                name={petData.name}
                imageUrl={petData.imgUrl}
                description={petData.description}
                status={petData.status}
              />
            </div>
            {/* // <ScrollContainer pets={petsData} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pets;
