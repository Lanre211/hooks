import React from 'react';

function Filter({ onFilterChange }) {
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          onChange={e => onFilterChange('title', e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          min="1"
          max="10"
          onChange={e => onFilterChange('rating', e.target.value)}
        />
      </div>
    );
}
export default Filter;