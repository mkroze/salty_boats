import { useState } from 'react';

const ListOfNeeds = ({listofneeds}) => {
  
  const sortedNeeds = listofneeds.sort((a, b) => {
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
