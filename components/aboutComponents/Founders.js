const Founders = () => {
  const crew = [
    {
      name: 'Marouane',
      position: 'Captain',
      bio: 'Captain Robert Thompson has been sailing the seas for over three decades. With a wealth of experience and a deep passion for sailing, he exudes a calm and confident demeanor. Known for his exceptional leadership skills, he has a keen eye for navigation and a sharp understanding of weather patterns. Having sailed across various oceans, Captain Thompson is a trusted and respected figure among the crew.',
      imageUrl: '/Captain.jpg',
      instaPath: 'https://www.instagram.com/marouane_brq/',
    },
    {
      name: 'Anas',
      position: 'First Mate',
      bio: "James Gallagher is the trusted first mate of the crew. With years of sailing experience, he has developed a deep understanding of the intricacies of sailing and navigation. James is known for his strong organizational skills and attention to detail. He works closely with the captain to ensure smooth operations on board. Highly reliable and dependable, he has earned the crew's respect with his exceptional problem-solving abilities.",
      imageUrl: '/firstmate.jpg',
      instaPath: 'https://www.instagram.com/anastheveryfirstmate/',
    },
    {
      name: 'Hakim',
      position: 'Navigator',
      bio: 'Amelia Roberts is the skilled navigator of the crew. With a passion for cartography and a love for the sea, she meticulously plans and charts the course for each journey. Amelia is well-versed in interpreting nautical charts, understanding currents, and considering weather patterns to ensure safe and efficient navigation. Her calm demeanor and sharp analytical skills make her an invaluable asset to the crew.',
      imageUrl: '/Cook.jpg',
      instaPath: 'https://www.instagram.com/chabraoui.hakim/',
    }
  ];
  function truncateString(str) {
    if (str.length > 300) {
      return str.slice(0, 300) + '...';
    } else {
      return str;
    }
  }
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-dblue text-3xl font-extrabold text-center pb-3">
            The crew
          </p>
          <h1 className="text-3xl text-center text-lgreen font-bold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People sailing the ship !
          </h1>
        </div>
      </div>
      <div className="w-full rounded-xl px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {crew.map((crewmate) => {
              return (
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded-xl overflow-hidden shadow-md bg-dblue">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={crewmate.imageUrl}
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center text-cpink pb-1">
                        {crewmate.name}
                      </div>
                      <p className="text-l font-medium text-lgreen text-center">
                        {crewmate.position}
                      </p>
                      <p className="text-justify px-4 text-cpink text-base pt-3 font-normal">
                        {truncateString(crewmate.bio)}
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a
                          href={crewmate.instaPath}
                          className="mx-5 hover:text-cpink text-lgreen"
                        >
                          <div>
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
