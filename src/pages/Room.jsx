import React from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomId } = useParams(); // URL로부터 roomId를 가져옴

  return (
    <div>
      <h2>Room ID: {roomId}</h2>
      {/* 방의 상세 정보를 표시하는 코드 */}
    </div>
  );
};

export default Room;