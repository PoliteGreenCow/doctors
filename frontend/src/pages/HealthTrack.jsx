import React, { useState } from 'react';

const HealthTrack = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <div className="bg-[#F4F8FB] h-screen w-full flex items-center justify-center" onClick={handleClick}>
      {showIframe ? (
        <iframe
          src="https://trach.onrender.com"
          title="Health Tracker"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          onError={(e) => {
            e.target.style.display = 'none';
            document.getElementById('error-message').style.display = 'block';
          }}
        />
      ) : (
        <div className="text-center">
          <p>Click anywhere on this page to load the Health Tracker.</p>
        </div>
      )}
      <div id="error-message" style={{ display: 'none', color: 'red' }}>
        <p>Failed to load Health Tracker. Please try again later.</p>
      </div>
    </div>
  );
};

export default HealthTrack;
