// src/components/SearchResultsList.jsx
import React from 'react';
import './SearchResultList.css';

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results?.map((result) => (
        <div className="result-card" key={result.id}>
          {result.image && (
            <img src={result.image} alt={result.name} className="result-image" />
          )}
          <div className="result-content">
            <h3>{result.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsList;
