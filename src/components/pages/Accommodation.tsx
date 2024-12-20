import React from 'react';

const Accommodation: React.FC = () => {
  const rooms = [
    { id: 1, name: 'Single Room', img: '/images/room1.jpg', description: 'Kshs. 2,000.' },
    { id: 2, name: 'Double Room', img: '/images/room3.jpeg', description: 'Kshs. 3,500.' },
    { id: 4, name: 'Conference Hall', img: '/images/conference.jpg', description: 'Kshs. 5,000 per day.' },
    // Add more rooms as needed
  ];
  const handleWhatsAppRedirect = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '+254784555654';
    const message = encodeURIComponent('Hi! I would like to request for a service.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center mb-8">Accommodation</h1>
      
      {/* Rooms Grid */}
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
      
      {/* Important Notes */}
      <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg">
        <p className="text-gray-800 text-sm mb-4">
          <strong>Note:</strong> Conference facilities and stationeries are available at <strong>Kshs. 300 per person</strong>, and projector services at <strong>Kshs. 300 per person</strong>.
        </p>
        <p className="text-gray-800 text-sm">
          For delicious meals, drinks, deluxe accommodation, a swimming pool, aerobic gym, and conference facilities with Wi-Fi, we have everything you need to make your stay memorable.
        </p>
      </div>
       {/* Call to Action */}
       <div className="col-span-full flex justify-center items-center w-full h-full mt-2">
      <button 
        onClick={handleWhatsAppRedirect}
        className="bg-red-600 text-white px-6 py-2 rounded w-fit hover:bg-red-700 transition duration-300 ease-in-out flex items-center gap-2"
      >
        Book now / Order Now
      </button>
    </div>
    </div>
  );
};

export default Accommodation;
