import React from "react";

const App = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white font-extrabold text-3xl text-center transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500">
        HEY THIS IS REACT APP
      </div>
    </div>
  );
};

export default App;
