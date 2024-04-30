import axios from 'axios';

export async function getProducts() {
  try {
    const response = await axios.get('https://jjrevamp.jjecom.com/wp-json/wp/v2/posts');
    console.log(response.data); // Log the fetched data to the server-side console
    return response.data; // Optionally return the data for client-side use
  } catch (error) {
    console.error(error); // Log any errors to the server-side console
    return []; // Return an empty array in case of errors
  }
}
