let headingOne=document.querySelector(".headingOne");
let inputOne=document.querySelector(".inputOne");
let buttonOne=document.querySelector(".buttonOne");
let displayOne=document.querySelector(".display");

let headingTwo=document.querySelector(".headingTwo");
let inputTwo=document.querySelector(".inputTwo");
let buttonTwo=document.querySelector(".buttonTwo");
let displayTwo=document.querySelector(".display2");

let count=5;
let chance=document.querySelector(".chance");
chance.innerHTML=`chance : ${count}`;

buttonOne.addEventListener("click",()=>{
    if(!(inputOne.value)){
            displayOne.innerHTML="Feels like a empty field";
            
    }else if(isNaN(inputOne.value)){
        displayOne.innerHTML="Not a Number";
            
    }else if(!(inputOne.value>0&&inputOne.value<=10)){
        displayOne.innerHTML="Entire a number 1-10";
            
    }else{
        headingTwo.style.display="block";
        inputTwo.style.display="block";
        buttonTwo.style.display="block";
        displayTwo.style.display="block";
        chance.style.display="block";
        

        headingOne.style.display="none";
        inputOne.style.display="none";
        buttonOne.style.display="none";
        displayOne.style.display="none";
    }
});

buttonTwo.addEventListener("click",()=>{
    if(!(inputTwo.value)){
        displayTwo.innerHTML="Feels like a empty field";
        
}else if(isNaN(inputTwo.value)){
    displayTwo.innerHTML="Not a Number";
        
}else if(!(inputTwo.value>0&&inputTwo.value<=10)){
    displayTwo.innerHTML="Entire a number 1-10";
}else{
    if(count>0){
        count--
        chance.innerHTML=`chance:${count}`
         if(inputOne.value==inputTwo.value){
            displayTwo.innerHTML="Player Two Win";
        }else{            
            displayTwo.innerHTML="Player One Win";
        };
    }else{
        displayTwo.innerHTML="You are out of chance";
    }
};    
});