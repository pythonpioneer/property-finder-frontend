import React from 'react';

export default function PropertyCard({ property }) {
  return (
    <div className="card m-3" style={{ maxWidth: '18rem' }}>
      <img src="https://hips.hearstapps.com/hmg-prod/images/first-day-of-winter-solstice-2021-1638278570.jpg" className="card-img-top" alt="Property" />
      <div className="card-body">
        <h5 className="card-title">{"property.desc"}</h5>
        <p className="card-text">Property Type: {"property.propertyType"}</p>
        <p className="card-text">Price: {"property.price"}</p>
        <p className="card-text">Furnishing: {"property.furnishing"}</p>
        <p className="card-text">Area: {"property.area"}</p>
      </div>
    </div>
  );
}
