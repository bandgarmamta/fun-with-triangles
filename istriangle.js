const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function claculateSunOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}

function isTriangle(){
    const sumOfAngles = claculateSunOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value) )

}

isTriangleBtn.addEventListener("click",isTriangle);
