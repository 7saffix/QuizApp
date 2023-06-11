const questions = [
        {
            ques: 'what is not necessary in web development?',
            a: 'HTML',
            b: 'CSS',
            c: 'JAVASCRIPT',
            d: 'C',
            correct: 'd'
        },
        {
            ques: 'which one is not a programming language?',
            a: 'HTML',
            b: 'PYTHON',
            c: 'JAVASCRIPT',
            d: 'C++',
            correct: 'a'
        },
        {
            ques: 'which one is consider as mother language?',
            a: 'HTML',
            b: 'C++',
            c: 'JAVASCRIPT',
            d: 'C',
            correct: 'd'
        }];
        
let i=0;
const question=document.getElementById('question');
const options=document.querySelectorAll('.options');

function setQuestion(){
    if(i===total){
        return end();
    }
    reset();
    const data=questions[i];
    question.innerText=`${i+1}. ${data.ques}`

    options.forEach(()=>{
       options[0].innerText=data.a;
       options[1].innerText=data.b;
       options[2].innerText=data.c;
       options[3].innerText=data.d;
    })
}
let right=0,
wrong=0,
total=questions.length;
let submit=()=>{
    const data=questions[i];
    const Answer=getAns();
    if(Answer===data.correct){
        right++
    }
    else{
        wrong++
    }
    i++;
    setQuestion();
}

const inputs=document.querySelectorAll('input');
function getAns(){
    let ans;
    inputs.forEach(input=>{
        if(input.checked){
            ans=input.value;
        }
    })
    return ans;
}
function reset(){
    inputs.forEach(input=>{
        input.checked=false
    })
}
function end(){
    const quiz =document.querySelector(".quiz");
    quiz.innerHTML=`<h3>Thank you for joining.</h3>
    <h3>your score ${right} out of ${total}</h3>`
}
setQuestion()