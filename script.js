window.promises = [];

// Create an array of 5 promises with random resolve times
for (let i = 0; i < 5; i++) {
  const randomDelay = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  promises.push(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise ${i + 1} resolved after ${randomDelay} seconds`);
      }, randomDelay * 1000);
    })
  );
}

// Wait for the first promise to resolve using Promise.any
Promise.any(promises)
  .then((result) => {
    // Print the result to the div with id "output"
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });


// Do not change the code above this
// add your promises to the array `promises`
