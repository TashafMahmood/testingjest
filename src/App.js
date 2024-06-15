import React from "react";

const App = () => {
  return (
    <div className="m-10 text-center">
      First react test case <br />
      <br />
      <h1 className="text-lg font-bold mb-4">Input Box Testing</h1>
      <input
        placeholder="Enter username"
        className="bg-slate-300 px-4 py-2 rounded-md"
        name="input-field"
        id="myinput"
      />
      <h1 className="text-lg font-bold my-4">Group Testing with Describe method</h1>
    </div>
  );
};

export default App;
