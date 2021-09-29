const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function claculateSunOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    if(Number(inputs[0].value) ===0 || Number(inputs[1].value) === 0 || Number(inputs[2].value) ===0 ){
        outputEl.innerText="Please enter all the input";
    }else{
        const sumOfAngles = claculateSunOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value) )
        if(sumOfAngles === 180){
            outputEl.innerText = "yay!, the angles for a triangle";
        }else{
            outputEl.innerText="Oh! Oh!, the angles don't form a triangle";
        }
    }
    
}

isTriangleBtn.addEventListener("click",isTriangle);
