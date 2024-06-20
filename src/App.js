import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [test, setTest] = useState("");
  return (
    <>
      <div className="m-10 text-center ">
        <h1 className="text-3xl mb-6">CHECKING ON CHANGE</h1>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="bg-gray-200 px-4 py-2 rounded-sm"
          placeholder="enter text"
        />
      </div>
      <div className="text-center">
        <div className="text-3xl mb-6">Testing Click Event</div>
        <button
          onClick={() => setTest("test")}
          className="bg-blue-500 px-6 py-2 mb-4 rounded-md text-white hover:bg-blue-600"
        >
          Update Text
        </button>
        <h1 className="text-2xl font-bold">{test}</h1>
      </div>

      <br />
      <label htmlFor="user-name"> Username </label>
      <input type="text" id="user-name" />

      <br/>
      <input placeholder="enter your name" defaultValue={'username'}/>
    </>
  );
};

export default App;
