"use client";
import Link from "next/link";
// import { Redirect } from "next";
import { redirect } from "next/navigation";

import PetContainer from "./pet-container";

interface Pet {
  id: any;
  name: string;
  imgUrl: string;
  description: string;
  status: boolean;
}

const ScrollContainer = ({ pets }: { pets: Pet[] }) => {
  // console.log(pets);
  return (
    <div className="w-[80rem]  h-[30rem]">
      <div className="overflow-scroll rounded-3xl  overflow-y-auto h-[35rem]  no-scrollbar ">
        {pets &&
          Array.isArray(pets) &&
          pets.map((pet) => (
            <div key={pet.id} className="mb-4 sticky top-0 ">
              <Link href={`  /pets/${pet.id}`}>
                <PetContainer
                  id={pet.id}
                  name={pet.name}
                  imageUrl={pet.imgUrl}
                  description={pet.description}
                  status={pet.status}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScrollContainer;

{
  /* <Link href="">
  /pets/12
<div className="bg-[url('https://plus.unsplash.com/premium_photo-1666298864117-ffc36b8e0cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[35rem] bg-center bg-cover sticky top-0  "></div>
</Link>
<div className="bg-[url('https://plus.unsplash.com/premium_photo-1677542200557-3c6856cc98b1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[35rem] bg-center bg-cover  sticky top-0"></div>
<Link href=""></Link>
<Link href="">
<div className="bg-[url('https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[35rem]  bg-center bg-cover sticky top-0"></div>
</Link>
<Link href="">
<div className="bg-[url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[35rem]  bg-center bg-cover sticky top-0"></div>
</Link> */
}
