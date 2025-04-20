function manipulateArray() {
  // Step 1: Initial Promise that resolves with the array after 3 seconds
  const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Initial 3 second delay
  });

  // Step 2: Chain the transformations
  initialPromise
    .then((array) => {
      // First Transformation: Filter even numbers
      const evenNumbers = array.filter(num => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          document.getElementById('output').textContent = evenNumbers.toString();
          resolve(evenNumbers);
        }, 1000); // 1 second delay before showing [2, 4]
      });
    })
    .then((evenNumbers) => {
      // Second Transformation: Multiply even numbers by 2
      const doubled = evenNumbers.map(num => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          document.getElementById('output').textContent = doubled.toString();
          resolve(doubled);
        }, 2000); // 2 second delay before showing [4, 8]
      });
    });
}

// Call the function when the page loads
window.onload = manipulateArray;

