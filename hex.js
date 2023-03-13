const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const colorFont = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexValue = "#";
    for(let i=0; i<6; i++){
        const random = Math.floor(Math.random() * 16);
        hexValue += hex[random];
    }
    colorFont.innerHTML = hexValue;
    document.body.style.backgroundColor = hexValue;
});