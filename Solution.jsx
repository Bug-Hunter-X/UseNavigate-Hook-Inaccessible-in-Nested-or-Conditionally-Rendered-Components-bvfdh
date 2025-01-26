import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // Ensure navigate is defined before use
    if (navigate) {
        navigate('/home');
    }
  };

  return (
    <div>
      <p>Current Location: {location.pathname}</p>  {/* show current route for debugging */}
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

export default MyComponent;