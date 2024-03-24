const HomePage = () => {
  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen w-screen bg-center bg-cover">
        <div className=" capitalize text-white sticky top-[20vh] left-10 w-[55rem] flex-col flex gap-16">
          <h1 className="text-[6rem] leading-[85px] font-semibold">
            The happiness of being at home
          </h1>
          <div className="w-[30rem] flex flex-col gap-6 ">
            <p className="  text-xl leading-7">
              To take them out of street, Cure them, socialize them, Vaccinate
              them and find them a new home and realize how great the
              responsibility is. After all,The price of our work is saved life .
              For some it is small, But for us it is our whole world .
              <br />
            </p>
            <p className="text-xl leading-7">
              We take care of both healty cats and animal with several
              dissabilities, The eldery and toddles who need round-clock care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
