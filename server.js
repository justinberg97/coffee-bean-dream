const path = require("path"); // ✅ Needed to resolve paths
const express = require("express"); // ✅ Required to set up static serving
const { db } = require("./server/db");
const app = require("./server/app");

// ✅ Serve Angular build files
app.use(express.static(path.join(__dirname, "public/coffee-bean-dream-public/dist/coffee-bean-dream-public"))); 
// ^^^ Replace 'coffee-bean-dream-public' at the end if your Angular output folder name is different

// ✅ Catch-all route to serve Angular's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/coffee-bean-dream-public/dist/coffee-bean-dream-public/index.html"));
});

const PORT = process.env.PORT || 3000;

// Function to connect to the database with retries
const connectWithRetry = async () => {
  const MAX_RETRIES = 15;
  const RETRY_DELAY_MS = 5000;

  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      console.log(`Attempting to connect to database (Attempt ${i + 1}/${MAX_RETRIES})...`);
      await db.authenticate();
      await db.sync();
      console.log('Database connected and synchronized successfully!');
      return true;
    } catch (error) {
      console.error(`Database connection failed (Attempt ${i + 1}):`, error.message);
      if (i < MAX_RETRIES - 1) {
        console.log(`Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
      } else {
        console.error('All database connection attempts failed. Exiting.');
        throw error;
      }
    }
  }
};

const init = async () => {
  try {
    await connectWithRetry();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server, Oh Error:", error);
  }
};

init();



















// const { db } = require("./server/db");
// const app = require("./server/app");

// const PORT = process.env.PORT || 3000;

// // Function to connect to the database with retries
// const connectWithRetry = async () => {
//   const MAX_RETRIES = 15; // Max number of retries
//   const RETRY_DELAY_MS = 5000; // Delay between retries in milliseconds (5 seconds)

//   for (let i = 0; i < MAX_RETRIES; i++) {
//     try {
//       console.log(`Attempting to connect to database (Attempt ${i + 1}/${MAX_RETRIES})...`);
//       await db.authenticate(); // Test the raw connection
//       await db.sync(); // Synchronize models (create/update tables)
//       console.log('Database connected and synchronized successfully!');
//       return true; // Connection successful
//     } catch (error) {
//       console.error(`Database connection failed (Attempt ${i + 1}):`, error.message);
//       if (i < MAX_RETRIES - 1) {
//         console.log(`Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
//         await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
//       } else {
//         console.error('All database connection attempts failed. Exiting.');
//         throw error; // Re-throw error if all retries exhausted
//       }
//     }
//   }
// };

// const init = async () => {
//   try {
//     await connectWithRetry(); // Use the retry function here to establish and sync DB connection

//     app.listen(PORT, () => {
//       console.log(`Server listening at http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error starting server, Oh Error:", error);
//   }
// };

// init();