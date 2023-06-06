const HeroSection = () => {
  return (
    <div className="flex justify-around items-center  ">
      <div className="text-center flex-col">
        <h1 className="text-4xl mb-2 font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ">
          <span className="block xl:inline text-dblue">Join our journey</span>{' '}
          <br />
          <span className="block mb-2 text-lgreen xl:inline">By lending a hand</span>
        </h1>
        <p className="mx-12 px-24 mt-3 max-w-md text-justify text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Embark on a remarkable voyage with our group of intrepid YouTubers as
          they navigate the world's oceans, capturing awe-inspiring moments
          along the way. By donating to our cause, you become an invaluable part
          of our crew, fueling our passion for discovery and enabling us to
          share the beauty of our planet. Join the adventure today and make a
          lasting impact. Donate now and help us continue to explore, inspire,
          and make waves across the globe.
        </p>
        <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="/donations"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-lgreen px-8 py-3 text-base font-medium text-white hover:bg-dblue md:py-4 md:px-10 md:text-lg"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
      <div>
        <img 
        src="https://images.unsplash.com/photo-1500627964684-141351970a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FpbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" 
        alt="" 
        className="rounded-xl" />
      </div>
    </div>
  );
};

export default HeroSection;
