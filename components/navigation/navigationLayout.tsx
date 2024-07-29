import Link from "next/link";
const NavigationLayout = () => {
  return (
    <>
      <nav className=" bg-transparent">
        <div className=" grid  grid-cols-3 justify-between mx-6 items-center uppercase">
          <Link href="/" className=" text-lg grid font-bold">
            {" "}
            <span className="leading-[10px]">old</span>
            <span>cat</span>
          </Link>
          <div className="flex gap-2 text-[#343a40] text-center  uppercase">
            {" "}
            <Link
              href="/about"
              className=" border  px-[14px] py-[4px] rounded-md text-sm border-b-2 backdrop-blur-sm bg-white/25 shadow-md"
            >
              About
            </Link>
            <div className=" border  px-[14px] py-[4px] text-sm rounded-md border-b-2 backdrop-blur-sm bg-white/25 shadow-md">
              Cats
            </div>
            <div className=" border text-sm   px-[14px] py-[4px]  rounded-md border-b-2 backdrop-blur-sm bg-white/25 shadow-md">
              Dogs
            </div>
            <div className=" border whitespace-nowrap px-[14px] text-sm py-[4px] rounded-md border-b-2 backdrop-blur-sm bg-white/20 shadow-md">
              Home Hospitals
            </div>
            <div className=" border  px-[14px] py-[4px] rounded-md border-b-2 text-sm backdrop-blur-sm bg-white/10 shadow-md">
              Contacts
            </div>
          </div>
          <div
            className=" text-center text-[#343a40]
           px-3 py-2 rounded-md backdrop-blur-sm bg-white/25 w-[100px] justify-self-end shadow-md"
          >
            {" "}
            Help us
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationLayout;
