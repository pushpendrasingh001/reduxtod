import React, { useState } from 'react';

function Todoinput({ addList }) {
  const [inputText, setInputText] = useState('');

  const handleAddClick = () => {
    addList(inputText);
    setInputText('');
  };

  return (
    <div className='m-4 ml-5'>
      <input
        type="text"
        value={inputText}
        placeholder="Add your task ....."
        onChange={(e) => setInputText(e.target.value)}
        className="input input-bordered input-accent w-[30%] max-w-xs"
      />
      <button onClick={handleAddClick} className="btn btn-success m-3">Add Task</button>
    </div>
  );
}

export default Todoinput;
