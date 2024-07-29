// import Pets from "@/app/pets/[id]/page";
import Link from "next/link";
import { db } from "@/lib/db";
import ScrollContainer from "./scroll-container";
import Pets from "@/app/pets/[id]/page";
import { Pet } from "@prisma/client";

const HomePage = async () => {
  const petsData = await db.pet.findMany();
  return (
    <>
      <section className=" sticky top-0 ">
        <div className="bg-[url('https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen w-screen bg-center bg-cover sticky top-0 ">
          <div
            className="capitalize text-white sticky top-[20vh] left-10 w-[55rem] flex-col flex gap-16 pl-16
          "
          >
            <h1 className="text-[6rem] leading-[85px] font-semibold">
              The happiness of being at home
            </h1>
            <div className="w-[30rem] flex flex-col gap-6 ">
              <p className=" text-xl leading-7">
                To take them out of street, Cure them, socialize them, Vaccinate
                them and find them a new home and realize how great the
                responsibility is. After all,The price of our work is saved life
                . For some it is small, But for us it is our whole world .
                <br />
              </p>
              <p className="text-xl leading-7">
                We take care of both healty cats and animal with several
                dissabilities, The eldery and toddles who need round-clock care.
              </p>
            </div>
            <Link
              href="/findPets"
              className="text-xl w-[130px]  text-[#edf6f9] text-center rounded-lg  px-1 py-1 border-b-2 backdrop-blur-sm bg-white/25 shadow-md  border"
            >
              give a pet
            </Link>
          </div>
        </div>
      </section>
      <section className=" sticky top-0 ">
        <div>
          <div
            className="
         h-screen    bg-[url('https://plus.unsplash.com/premium_photo-1666878155781-f86514e5808b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
          >
            <div className="flex  justify-center h-screen  text-8xl text-white  gap-[200px] pt-36">
              <div>
                <h2>give a pet</h2>
              </div>
              <div>
                <h2> save a life</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="sticky top-0
          h-screen  flex items-center justify-center backdrop-blur-sm bg-grey/80  w-screen "
        >
          <ScrollContainer pets={petsData} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
