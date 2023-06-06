import { useState } from 'react';

const Offers = () => {
  const [offers, setOffers] = useState([
    {
      title: 'Island Hopper',
      pricing: '0 ',
      listOfPerks: ['Normal content', 'Joining the community'],
    },
    {
      title: 'Wave Rider',
      pricing: '100 ',
      listOfPerks: ['Exclusive content', '5% Reduction on merch'],
    },
    {
      title: 'Team Mate',
      pricing: '250 ',
      listOfPerks: ['Right to embark', '10% reduction on merch'],
    },
  ]);
  return (
    <>
      <h1 className='text-center text-3xl text-lgreen font-bold my-12 '>Choose your subscription plan</h1>
      <div className="flex gap-8 w-5/6 m-auto">
        {offers.map((offer) => {
          return (
            <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mr-1 w-1/4">
              <div className="flex flex-col items-center p-10 bg-dblue rounded-md">
                <span className="font-semibold text-3xl text-lgreen">
                  {offer.title}
                </span>
                <div className="flex items-center">
                  <span className="text-5xl font-bold text-white">
                    {offer.pricing}
                  </span>
                  <span className="text-3xl text-white">&nbsp;MAD</span>
                  <span className="text-2xl text-white">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  {offer.listOfPerks.map((perk) => {
                    return (
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-dblue fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span className="ml-2 font-medium text-xl">{perk}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center text-cpink justify-center w-full h-12 px-6 text-sm  bg-lgreen hover:bg-dblue font-bold rounded-lg ">
                  Enroll
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Offers;
