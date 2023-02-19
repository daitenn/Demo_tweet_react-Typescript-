import React from 'react'
import { useState } from 'react';

const Name = () => {
  const [name, setName] = useState("");
  const [addName, setAddName] = useState("");

  return (
    <div className='col-6'>
      <p>Name</p>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  )
};

export default Name
