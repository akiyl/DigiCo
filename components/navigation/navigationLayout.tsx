const NavigationLayout = () => {
  return (
    <>
      <nav className=" bg-transparent">
        <div className=" grid  grid-cols-3 justify-between mx-6 items-center uppercase">
          <div className=" text-lg grid font-bold">
            {" "}
            <span className="leading-[10px]">old</span>
            <span>cat</span>
          </div>
          <div className="flex gap-1 text-white text-center  uppercase">
            {" "}
            <div className=" border  px-[12px] py-[4px] rounded-md border-b-2 backdrop-blur-sm bg-white/10">
              About
            </div>
            <div className=" border  px-[12px] py-[4px] rounded-md border-b-2 backdrop-blur-sm bg-white/10">
              Cats
            </div>
            <div className=" border  px-[12px] py-[4px] rounded-md border-b-2 backdrop-blur-sm bg-white/10">
              Dogs
            </div>
            <div className=" border whitespace-nowrap px-[12px] py-[4px] rounded-md border-b-2 backdrop-blur-sm bg-white/20">
              Home Hospitals
            </div>
            <div className=" border  px-[12px] py-[4px] rounded-md border-b-2 backdrop-blur-sm bg-white/10">
              Contacts
            </div>
          </div>
          <div className=" text-center text-white px-3 py-2 rounded-md backdrop-blur-sm bg-white/25 w-[100px] justify-self-end">
            {" "}
            Help us
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationLayout;
