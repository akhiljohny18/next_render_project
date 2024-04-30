"use client"
//client side data fetching using useEffect and useState
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClientsideComponent() {
  const [posts, setPosts] = useState([]); // Initializing state variable 'posts' as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jjrevamp.jjecom.com/wp-json/wp/v2/posts'); // Fetching data from the provided API endpoint using Axios
        setPosts(response.data); // Updating the 'posts' state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error); // Handling errors if data fetching fails
      }
    };

    fetchData(); // Calling the fetchData function when the component mounts
  }, []); // Using the useEffect hook with an empty dependency array to ensure it runs only once when the component mounts

  return (
    <div>
      <h1>Posts from API</h1>
      <ul>
        {posts.map(post => ( // Mapping over the 'posts' array and rendering each post's title
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
}
