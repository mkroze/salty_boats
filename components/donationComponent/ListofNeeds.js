import { useState } from 'react';

const ListOfNeeds = () => {
  const [listNeeds, setListNeeds] = useState([
    {
      title: 'Emergency Sail Repair',
      image: 'sail-repair.jpg',
      bio: 'Our sail has suffered damage during the treacherous storm that struck us unexpectedly. The torn fabric threatens to disrupt our journey and compromise our ability to harness the wind. Your support will enable us to swiftly repair the sail, ensuring our safe passage and allowing us to continue exploring the vast seas.',
      urgency: 'Urgent',
    },
    {
      title: 'Navigation Equipment Upgrade',
      image: 'navigation-equipment.jpg',
      bio: 'Navigating uncharted waters demands the utmost precision and accuracy. Unfortunately, our current navigation equipment is outdated and unreliable, putting us at risk of getting lost or encountering hazards. Your contribution will enable us to upgrade our navigation tools, ensuring we can safely chart our course and explore new horizons with confidence.',
      urgency: 'High',
    },
    {
      title: 'Safety Gear Renewal',
      image: 'safety-gear.jpg',
      bio: 'Safety is our utmost priority as we brave the unpredictable seas. However, our safety gear has endured wear and tear over time, compromising its effectiveness. Your support will help us replace essential safety equipment such as life jackets, harnesses, and emergency beacons, ensuring the well-being of our crew throughout this extraordinary journey.',
      urgency: 'High',
    },
    {
      title: 'Engine Maintenance',
      image: 'engine-maintenance.jpg',
      bio: 'Our trusty engine, the lifeline of our vessel, requires immediate maintenance to ensure its reliable operation. Without it, we would be at the mercy of winds and currents, limiting our ability to reach distant destinations or navigate challenging passages. Your contribution will help us service the engine, allowing us to continue our voyage with the peace of mind that comes with a well-functioning power source.',
      urgency: 'Medium',
    },
    {
      title: 'Fresh Water Filtration System',
      image: 'water-filtration.jpg',
      bio: 'Access to safe drinking water is crucial for our survival at sea. However, our current filtration system is outdated and no longer effectively removes impurities from the water we collect. Your support will enable us to install a modern water filtration system, ensuring a continuous supply of clean, potable water, and safeguarding our health during this incredible maritime odyssey.',
      urgency: 'Medium',
    },
    {
      title: 'Electrical System Upgrade',
      image: 'electrical-system.jpg',
      bio: 'Our electrical system, responsible for powering essential equipment and providing lighting onboard, is in dire need of an upgrade. Outdated wiring and unreliable connections pose a risk to our safety and limit our ability to document and share our extraordinary experiences with the world. Your contribution will help us enhance our electrical system, enabling us to capture and share the magic of our voyage.',
      urgency: 'High',
    },
    {
      title: 'Gallery Supplies and Provisions',
      image: 'Gallery-supplies.jpg',
      bio: 'The heart of our floating home is the gallery, where we gather to nourish our bodies and share moments of camaraderie. However, our supplies have dwindled, and our cooking utensils have seen better days. Your support will enable us to restock our gallery with fresh ingredients, replenish cookware, and ensure we have the provisions needed to sustain our crew during this extraordinary journey.',
      urgency: 'Medium',
    },
  ]);
  const sortedNeeds = listNeeds.sort((a, b) => {
    const priorityOrder = {
      Urgent: 1,
      High: 2,
      Medium: 3,
    };
    return priorityOrder[a.urgency] - priorityOrder[b.urgency];
  });
  return (
    <div className="space-y-4 ">
      {sortedNeeds.map((need, index) => {
        console.log(index);
        return (
          //   <details
          //     className="group  border-s-4 border-lgreen bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          //     open
          //   >
          //     <div className="">
          //       <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          //         <h2 className="text-lg font-medium text-gray-900">
          //           {need.title}
          //         </h2>

          //         <div className="flex w-1/4 justify-around">
          //           <h2
          //             className={`text-lg font-medium  ${
          //               need.urgency == 'Medium'
          //                 ? 'text-lgreen'
          //                 : need.urgency == 'High'
          //                 ? 'text-red-500 underline rounded-xl'
          //                 : need.urgency == 'Urgent'
          //                 ? 'text-dblue'
          //                 : ''
          //             }`}
          //           >
          //             {need.urgency}
          //           </h2>

          //           <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          //             <svg
          //               xmlns="http://www.w3.org/2000/svg"
          //               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
          //               viewBox="0 0 20 20"
          //               fill="currentColor"
          //             >
          //               <path
          //                 fill-rule="evenodd"
          //                 d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          //                 clip-rule="evenodd"
          //               />
          //             </svg>
          //           </span>
          //         </div>
          //       </summary>

          //       <p className="mt-4 leading-relaxed text-gray-700">{need.bio}</p>
          //     </div>
          //   </details>

          <details
            className="group [&_summary::-webkit-details-marker]:hidden py-2"
            close
          >
            <summary className="flex items-center justify-between border-s-4 border-dblue bg- p-4 rounded-lg cursor-pointer ">
              <h2 className="font-medium text-center text-lgreen">
                {need.title}
              </h2>

              <div className="flex w-1/4 justify-around">
                <h2
                  className={`text-lg font-bold rounded-sm bg-cpink px-2 ${
                    need.urgency == 'Medium'
                      ? 'text-lgreen'
                      : need.urgency == 'High'
                      ? 'text-dblue '
                      : need.urgency == 'Urgent'
                      ? 'text-red-500'
                      : ''
                  }`}
                >
                  {need.urgency}
                </h2>

                <svg
                  className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </summary>
            <div className="flex gap-2 mx-auto ">
              <div className="w-1/2">
                <img src={need.img} alt="Image" srcset="" />
              </div>

              <p className="p-4 leading-relaxed text-gray-700 bg-white border border-gray-100 shadow-l rounded-xl">
                {need.bio}
              </p>
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default ListOfNeeds;
