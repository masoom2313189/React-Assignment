// import hook here
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  // create back funtion here
  const NotFoundFun = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate();
    });
  };

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      <button onClick={NotFoundFun}>Back to Home</button>
    </div>
  );
};
