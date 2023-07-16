const Need = ({ need }) => {
  return (
    <details
      className="group [&_summary::-webkit-details-marker]:hidden py-2"
      close
    >
      <summary className="flex items-center bg-dblue justify-between border-s-4 border-lgreen bg- p-4 rounded-lg cursor-pointer ">
        <h2 className="font-medium text-center text-cpink">{need.title}</h2>

        <div className="flex w-1/4 justify-around">
          <h2
            className={`text-lg font-bold rounded-sm bg-white px-2 ${
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
        <div className="w-5/6">
          <img src={need.image} alt="Image" srcset="" />
        </div>

        <p className="p-4 leading-relaxed text-gray-700   shadow-l rounded-xl">
          {need.bio}
        </p>
      </div>
    </details>
  );
};

export default Need;
