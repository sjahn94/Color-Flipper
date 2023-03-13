const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const colorFont = document.querySelector(".color");

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 3);
    const color = colors[random];
    colorFont.innerHTML = color; 
    document.body.style.backgroundColor = color;
});