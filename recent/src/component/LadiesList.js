import React from 'react';

function LadiesList({ladies}) {
  return (
    <div>
      <h2>
        I am {ladies.Name}.
        I am {ladies.Age} years old.
        I am expert in {ladies.Expert}.
      </h2>
    </div>
  );
}

export default LadiesList;
