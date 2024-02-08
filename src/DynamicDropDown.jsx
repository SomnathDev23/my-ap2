import React, { useState, useEffect } from 'react';

const DynamicDropdown = () => {
  const [options, setOptions] = useState([]);
  const [sortedOptions, setSortedOptions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  // Simulating fetching data dynamically (you should replace this with actual data fetching)
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      // Simulated data
      const fetchedOptions = ['Option D', 'Option A', 'Option C', 'Option B'];
      setOptions(fetchedOptions);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Sort options based on the selected order
    const sorted = [...options].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
    setSortedOptions(sorted);
  }, [options, sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <label>
        Sort by:
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <br />
      <label>
        Options:
        <select>
          {/* Render dynamically populated or sorted options based on the sortOrder */}
          {sortedOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DynamicDropdown;
