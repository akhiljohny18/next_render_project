import { connectToDatabase } from '../../db/db1'; // Import the connection function

export default async function handler(req, res) {
  try {
    const pool = await connectToDatabase();
    const connection = await pool.getConnection(); // Get a connection

    const query = "SELECT * FROM users";
    const values = []; // No values needed for this query

    const [data] = await connection.execute(query, values);

    connection.release(); // Release the connection back to the pool

    res.status(200).json({ results: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); // Generic error message
  }
}
