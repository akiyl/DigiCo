"use client";

import Link from "next/link";

interface PetContainerProps {
  id: any;
  name: string;
  imageUrl: string;
  description: string;
  status: boolean;
  // onClick?: () => void;
}
const PetCOntainer = ({
  id,
  name,
  imageUrl,
  description,
  status,
}: PetContainerProps) => {
  return (
    <div id={id}>
      <div className="bg-black ">
        <Link href={`/pets/${id}`}>
          <div
            className=" h-screen bg-center    no-repeat bg-cover "
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="capitalize text-white text-8xl pt-40 pl-40   ">
              {name}
            </div>

            <div>
              <p className=" text-2xl pl-40 pt-20 text-white ">{description}</p>
            </div>
            {/* <p>{description}</p> */}
            {/* <h6> {status}</h6> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PetCOntainer;
