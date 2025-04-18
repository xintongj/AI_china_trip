import React from 'react';

function Destinations() {
  const destinations = [
    {
      id: 1,
      name: 'Great Wall of China',
      description: 'Experience one of the world\'s wonders stretching over 13,000 miles across ancient Chinese borders.',
      image: '/api/placeholder/400/320'
    },
    {
      id: 2,
      name: 'Shanghai',
      description: 'Discover the perfect blend of traditional culture and modern innovation in China\'s largest city.',
      image: '/api/placeholder/400/320'
    },
    {
      id: 3,
      name: 'Zhangjiajie',
      description: 'Explore the stunning pillar-like formations that inspired landscapes in the movie Avatar.',
      image: '/api/placeholder/400/320'
    },
    {
      id: 4,
      name: 'Xi\'an & Terracotta Army',
      description: 'Step back in time to see thousands of life-sized warriors built over 2,000 years ago.',
      image: '/api/placeholder/400/320'
    }
  ];

  return (
    <section className="destinations">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div className="destination-card" key={destination.id}>
              <img src={destination.image} alt={destination.name} className="destination-img" />
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <a href="#" className="btn btn-outline">Explore</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
