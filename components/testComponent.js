"use client"
import React from 'react';

export default function TestComponent({ values }) {
  //get the data fetched in the pages as values 
  console.log("values", values);
  // console the values

  return (
    <div>
      {values.map((item, index) => (
        <div className="section" key={index}>
          <h2>{item.title.rendered}</h2>
          {/* Render other properties as needed */}
        </div>
      ))}
    </div>
  );
}
