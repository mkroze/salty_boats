import { useState } from 'react';
import Need from './Need';


const ListOfNeeds = ({ listofneeds }) => {
  const sortedNeeds = listofneeds.sort((a, b) => {
    const priorityOrder = {
      Urgent: 1,
      High: 2,
      Medium: 3,
    };
    return priorityOrder[a.urgency] - priorityOrder[b.urgency];
  });

  return (
    <div className="space-y-4  w-2/4 m-auto">
      {sortedNeeds.map((need, index) => {
        console.log(index);
        return <Need need={need} />;
      })}
    </div>
  );
};

export default ListOfNeeds;
