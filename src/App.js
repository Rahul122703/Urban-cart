import React, { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import Routers from "./routers";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <>{loading ? <Loader /> : <Routers />}</>;
};

export default App;
