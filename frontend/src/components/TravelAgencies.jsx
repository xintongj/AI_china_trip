import React from 'react';

function TravelAgencies() {
  const agencies = [
    {
      id: 1,
      name: 'China Travel Service',
      description: 'Premier travel agency specializing in authentic cultural experiences across China.',
      logo: '/api/placeholder/200/200'
    },
    {
      id: 2,
      name: 'Dragon Adventures',
      description: 'Expert guides for outdoor enthusiasts seeking China\'s most breathtaking natural landscapes.',
      logo: '/api/placeholder/200/200'
    },
    {
      id: 3,
      name: 'Silk Road Journeys',
      description: 'Specialized tours along the historic Silk Road with expert cultural insights.',
      logo: '/api/placeholder/200/200'
    }
  ];

  return (
    <section className="travel-agencies">
      <div className="container">
        <h2 className="section-title">Our Travel Partners</h2>
        <div className="agencies-list">
          {agencies.map(agency => (
            <div className="agency-card" key={agency.id}>
              <img src={agency.logo} alt={agency.name} className="agency-logo" />
              <h3>{agency.name}</h3>
              <p>{agency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelAgencies;
