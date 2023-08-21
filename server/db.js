// Import the 'pg' library's Pool class for managing PostgreSQL connections
const Pool = require("pg").Pool;

// Create a new instance of the Pool class with database connection configuration
const pool = new Pool({
  host: "localhost",    // Database host address
  user: "postgres",     // Username for database access
  password: "1122",     // Password for the specified user
  port: 5432,           // Port number for database connection
  database: "jwtauth"   // Name of the database to connect to
});

// Export the created pool instance for external use in other modules
module.exports = pool;
