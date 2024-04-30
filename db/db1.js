import mysql from 'mysql2/promise';

let pool; // Global variable for connection pool

export const connectToDatabase = async () => {
  if (!pool) {
    try {
      pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodedb",
      });
      console.log('Connected to database');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error; // Re-throw for handling in API route
    }
  }
  return pool;
};
