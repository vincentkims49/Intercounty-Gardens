import React from 'react';

const Accommodation: React.FC = () => {
  const rooms = [
    { id: 1, name: 'Deluxe Room', img: '/images/room1.jpg', description: 'Spacious room with king-sized bed.' },
    { id: 2, name: 'Beachfront Suite', img: '/images/room2.jpeg', description: 'Stunning views of the ocean.' },
    { id: 4, name: 'Mountain Cabin', img: '/images/room3.jpeg', description: 'Cozy cabin in the mountains.' },
  
    // Add more rooms as needed
  ];

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-4xl font-bold text-center mb-8">Accommodation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p className="text-gray-600">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
