const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#btn-submit");
const outputEl = document.querySelector("#output");


function calculateArea(){
    if(Number(sides[0].value)===0 || Number(sides[1].value) === 0 ){
        outputEl.innerText = "Please enter all inputs"
    }else{
        let area = (1/2)*Number(sides[0].value)*Number(sides[1].value);
        outputEl.innerText = "Area of the triangle is "+area;
    }
}

areaBtn.addEventListener("click", calculateArea);