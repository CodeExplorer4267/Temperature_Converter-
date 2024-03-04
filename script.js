const temp_input=document.querySelector(".temp_input")
const select_temp=document.getElementById("Temp")
const btn=document.querySelector(".button")
const result=document.getElementById("result_container")
const CelsiusRes=document.getElementById("CelsiusResult")
const FahrenRes=document.getElementById("FahrenheitResult")
const KelvinRes=document.getElementById("KelvinResult")

function convertTocelsius(){
    const tempVal=temp_input.value;
    if(select_temp.value==="Fahrenheit"){
        const result1=(5/9)*(tempVal-32);
        return result1;
    }
    else if(select_temp.value==="Kelvin"){
        const result1=(tempVal-273.15);
        return result1;
    }
    else{
        return tempVal;
    }
}
function convertTofahrenheit(){
    const tempVal=temp_input.value;
    if(select_temp.value==="Celsius"){
        const result2=((9*tempVal)/5)+32;
        return result2;
    }
    else if(select_temp.value==="Kelvin"){
        const result2=(1.8*(tempVal-273.15))+32;
        return result2;
    }
    else{
        return tempVal;
    }
}
function convertTokelvin(){
    const tempVal=temp_input.value;
    if(select_temp.value==="Celsius"){
        const result3=(tempVal-273.15)+(2*273.15);
        return result3;
    }
    else if(select_temp.value==="Fahrenheit"){
        const result3=((5/9)*(tempVal-32))+273.15;
        return result3;
    }
    else{
        return tempVal;
    }
}
btn.addEventListener("click",()=>{
    let CelsiusResult=convertTocelsius()
    CelsiusRes.value=CelsiusResult;
    let FahrenheitResult=convertTofahrenheit();
    FahrenRes.value=FahrenheitResult;
    let KelvinResult=convertTokelvin();
    KelvinRes.value=KelvinResult;
})
