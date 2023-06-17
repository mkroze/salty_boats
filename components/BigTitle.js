const BigTitles = ({title1, title2, bio}) => {
  
  return (
    <div      className="text-center w-1/2 m-auto">
      
      <h1 className="text-4xl mb-2 font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ">
        <span className="block xl:inline text-dblue">{title1}</span>{' '}
        <br />
        <span className="block mb-2 text-lgreen xl:inline">{title2}</span>
      </h1>
      <p className="text-justify px-4 text-dblue w-2/3 m-auto text-base pt-3 font-normal">
        {bio}
      </p>
    </div>
  );
};

export default BigTitles;
