const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("btn-submit");
const outputEl = document.querySelector("#output");


function calculateArea(){
    let area = (1/2)*Number(sides[0].value)*Number(sides[1].value);
    outputEl.innerText = "The area of the triangle is "+area;
}

areaBtn.addEventListener("click", calculateArea);