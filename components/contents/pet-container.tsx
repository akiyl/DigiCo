"use client";

import Link from "next/link";

interface PetContainerProps {
  id: string;
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
      <Link href="">
        <div
          className=" h-[550px] bg-center  no-repeat bg-cover "
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="capitalize text-white text-6xl pt-20  text-center ">
            {name}
          </div>

          {/* <img src={imageUrl} alt="" /> */}
          {/* <p>{description}</p> */}
          {/* <h6> {status}</h6> */}
        </div>
      </Link>
    </div>
  );
};

export default PetCOntainer;
