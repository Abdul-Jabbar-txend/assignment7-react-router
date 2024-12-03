import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const DelayedSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{showSpinner ? <Spinner /> : <div>Lazy Loading...</div>} </div>;
};

export default DelayedSpinner;
