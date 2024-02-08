import React, { useState } from 'react';

const InterdependentDropdowns = () => {
  // Sample data
  const countries = [
    { id: 1, name: 'USA', states: ['New York', 'California', 'Texas'] },
    { id: 2, name: 'Canada', states: ['Ontario', 'Quebec', 'Alberta'] },
    { id: 3, name: 'India', states: ['Maharashtra', 'Karnataka', 'Delhi'] },
  ];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    // Reset the selected state when the country changes
    setSelectedState('');
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
  };

  return (
    <div>
      <h1>Interdependent Dropdowns</h1>
      <label>
        Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        State:
        <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
          <option value="">Select State</option>
          {selectedCountry &&
            countries
              .find((country) => country.name === selectedCountry)
              .states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
        </select>
      </label>
      <br />
      {selectedCountry && selectedState && (
        <p>
          You selected {selectedState} in {selectedCountry}.
        </p>
      )}
    </div>
  );
};

export default InterdependentDropdowns;
