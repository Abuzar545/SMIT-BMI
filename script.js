window.onload = () =>{
    const button = document.querySelector('#btn');
    button.addEventListener('click',calculateBmi);
 }
 function calculateBmi() {
     const weight= document.querySelector('#weight').value;
     const Height= document.querySelector('#Height').value;
     const result= document.querySelector('#result');
     if (!Height || isNaN(Height) || Height <0){
         result.innerText = "please provide a valid height";
     } else if(!weight || isNaN(weight) || weight <0){
         result.innerText ="please provide a valid weight";
         return;
     }
     let bmi = weight/(Height * Height).toFixed();
     if(bmi<18.5){
         result.innerText= `your under weighted: ${bmi}`;
     }else if(bmi>18.5 && bmi<24.9){
         result.innerText =`Normal: ${bmi}`;
     } else if(bmi>25 && bmi<29.9){
         result.innerText=`over weight: ${bmi}` ;
     }
     else if(bmi>30){
         result.innerText=`obasity: ${bmi}`;
     }
 }
 