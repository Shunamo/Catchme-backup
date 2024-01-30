import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import MeetingRoomMain from './pages/MeetingRoomMain';
import Room from './pages/Room';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      <Routes> 
          <Route path="/" element={<MeetingRoomMain />} /> 
          <Route path="/room/:roomId" element={<Room />} /> 
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
