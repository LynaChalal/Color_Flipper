const button = document.querySelector("button")
const main = document.querySelector("main")
const colorSpan = document.querySelector(".color")


button.addEventListener("click", () => {
    main.style.backgroundColor =randomHexColor() 
    colorSpan.textContent = randomHexColor()
})


function randomHexColor(){
    //generate random numbers for RGB channels "#RRGGBB"
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue=Math.floor(Math.random() * 255)

    //convert them to hexadecimal
    // The padStart method ensures that each hexadecimal channel value is at least two characters long (with leading zeros if necessary).
    // transform a decimal number into a hexadecimal representation using the .toString() method with a radix parameter. The radix parameter specifies the base of the numeral system to use
    red= red.toString(16).padStart(2, '0');
    green=green.toString(16).padStart(2, '0');
    blue=blue.toString(16).padStart(2, '0');

     // Combine the RGB values to form a valid hexadecimal color code
     return `#${red}${green}${blue}`; //concatenation

}
 

