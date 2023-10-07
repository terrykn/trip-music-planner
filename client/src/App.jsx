import { Avatar } from '@mui/material';
import './App.css';

import TravelInput from './components/TravelInput';
import TravelOutput from './components/TravelOutput';

import { useState } from 'react';

function App() {
  const [travelData, setTravelData] = useState({
    start: "N/A",
    end: "N/A",
    travelTime: 0,
  })

  const generateRoute = (from, destination) => {
    const travelTime = calculateTravelTime(from, destination);

    setTravelData({
      start: from,
      end: destination,
      travelTime: travelTime,
    });
  };

  const calculateTravelTime = (from, destination) => {
    return Math.floor(Math.random() * 60) + 1; // random travel time for now
  }

  return (
    <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {/* Header */}
      <div className="Header">
        
        <h1>Trip Music Planner</h1>
      </div>

      {/* Generate Route from TravelInput */}
      <div className="App">
        <TravelInput onGenerateRoute={generateRoute} />
      </div>

      {/* Generate Playlist from TravelOutput */}
      <div className="App">
        <TravelOutput
          start={travelData.start}
          end={travelData.end}
          travelTime={travelData.travelTime} 
        />
      </div>

      {/* Footer */}
      <div className="Footer">
        <Avatar 
          src="/assets/njtransit2-logo.jpg" 
          sx={{ width: 80, height: 80 }}
        />
        <Avatar 
          src="/assets/spotify-logo.png"
          sx={{ width: 70, height: 70 }} 
        />
      </div>
    </div>
  );
}

export default App;