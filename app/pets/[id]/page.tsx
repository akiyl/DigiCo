// "use client";
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
      <div>
        <PetCOntainer
          id={petData.id}
          name={petData.name}
          imageUrl={petData.imgUrl}
          description={petData.description}
          status={petData.status}
        />
      </div>
    </>
  );
};

export default Pets;
