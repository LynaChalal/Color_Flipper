const colors=["green", "red", "rgba(133,122,200)", "#f15025","blue"]

const button = document.querySelector("button")// Selects the first <button> element in the document
const main = document.querySelector("main")
const colorSpan = document.querySelector(".color")

//button.addEventListener("click", () => { ... });: This line adds a click event listener to the button element. When the button is clicked, the code inside the function (the arrow function) will be executed.
button.addEventListener("click", () => {
    // Generate a random index to select a color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);//Math.random() generate a random floating-point number between 0 (inclusive) and 1 (exclusive), then multiplying it by the length of the colors array. Math.floor() is used to round down the result to a whole number, ensuring it's a valid array index
  
    // Set the background color and update the displayed color code
    main.style.backgroundColor = colors[randomIndex];
    colorSpan.textContent = colors[randomIndex];
  });