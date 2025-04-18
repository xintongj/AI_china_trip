import React from 'react';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: 1,
      title: 'Create Your Profile',
      description: 'Sign up and tell us about your travel preferences, dietary needs, and interests.'
    },
    {
      id: 2,
      number: 2,
      title: 'Get AI Recommendations',
      description: 'Our AI will suggest personalized destinations, attractions, and restaurants based on your profile.'
    },
    {
      id: 3,
      number: 3,
      title: 'Customize Your Itinerary',
      description: 'Fine-tune your trip plan, selecting your favorite recommendations and adjusting as needed.'
    },
    {
      id: 4,
      number: 4,
      title: 'Book With Confidence',
      description: 'Choose between self-guided tours or book with our partner agencies for a guided experience.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          {steps.map(step => (
            <div className="step-card" key={step.id}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;