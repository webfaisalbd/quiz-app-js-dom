let submit=document.getElementById('submit');
let myName=document.getElementById('myName');
let myEmail=document.getElementById('myEmail');
let myPhone=document.getElementById('myPhone');
let result=document.getElementById('result');

submit.addEventListener('click',function(e){
    e.preventDefault();
    let answer11=document.getElementById('answer11').checked;
    let answer12=document.getElementById('answer12').checked;
    let answer13=document.getElementById('answer13').checked;
    let answer14=document.getElementById('answer14').checked;
    let answer21=document.getElementById('answer21').checked;
    let answer22=document.getElementById('answer22').checked;
    let answer23=document.getElementById('answer23').checked;
    let answer24=document.getElementById('answer24').checked;
    let answer31=document.getElementById('answer31').checked;
    let answer32=document.getElementById('answer32').checked;
    let answer33=document.getElementById('answer33').checked;
    let answer34=document.getElementById('answer34').checked;

    let count=0;
    let correct=0;
    let wrong=0;


    if(answer11){
        count=count+5;
        correct++;
    }
    if(answer12 || answer13 || answer14){
        count=count-5;
        wrong++;
    }
    if(answer24){
        count=count+5;
        correct++;
    }
    if(answer21 || answer22 || answer23){
        count=count-5;
        wrong++;
    }
    if(answer32){
        count=count+5;
        correct++;
    }
    if(answer31 || answer33 || answer34){
        count=count-5;
        wrong++;
    }
    
    result.innerHTML=`<p>Name: ${myName.value} ||| Email: ${myEmail.value}</p>
    <p>Your result is:  ${count}</p>
    <p>${correct} <span style="color:green">Correct</span> answer and  ${wrong} <span style="color:red">Wrong</span> answer<p>
   `;


   myName.value='';
   myEmail.value='';
   myPhone.value='';

})

