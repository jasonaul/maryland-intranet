import React, { useState } from 'react';

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Calendar URL from your provided link, formatted for embedding
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=mdlcv.org_qroqhf2legl5g7t5p7v8dk713c%40group.calendar.google.com&ctz=America%2FNew_York";
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Maryland LCV Staff Calendar</h2>
        <p>View and track all upcoming staff events and meetings</p>
      </div>
      
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading calendar...</p>
        </div>
      )}
      
      <div className={`calendar-wrapper ${isLoading ? 'loading' : 'loaded'}`}>
        <iframe 
          src={calendarUrl}
          title="Maryland LCV Staff Calendar"
          width="100%" 
          height="700" 
          frameBorder="0" 
          scrolling="no"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
      <div className="calendar-footer">
        <p>
          <strong>Note:</strong> To add events to this calendar, please use your Google Calendar account 
          and add events to the Maryland LCV Staff Calendar.
        </p>
      </div>
      
      <style jsx>{`
        .calendar-container {
          width: 100%;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .calendar-header {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eaeaea;
        }
        
        .calendar-header h2 {
          color: #2c5e2e; /* Maryland LCV green */
          margin: 0 0 8px 0;
          font-size: 24px;
        }
        
        .calendar-header p {
          color: #666;
          margin: 0;
        }
        
        .calendar-wrapper {
          position: relative;
          width: 100%;
          min-height: 700px;
          transition: opacity 0.3s ease;
        }
        
        .calendar-wrapper.loading {
          opacity: 0.3;
        }
        
        .calendar-wrapper.loaded {
          opacity: 1;
        }
        
        .calendar-wrapper iframe {
          border: 1px solid #eaeaea;
          border-radius: 4px;
        }
        
        .loading-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          text-align: center;
        }
        
        .loading-spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 4px solid #2c5e2e;
          width: 40px;
          height: 40px;
          margin: 0 auto 15px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .calendar-footer {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #eaeaea;
          font-size: 14px;
          color: #666;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .calendar-container {
            padding: 15px;
          }
          
          .calendar-wrapper {
            min-height: 500px;
          }
          
          .calendar-wrapper iframe {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default Events;