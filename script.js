var number_of_questions=0;
var correct_answers=0;
var temp;
var right_answer;
var interval;
var ti;
function check_number_of_questions() {
    let input=document.getElementById("input_box").value;
    let num=0;
    num=Number(input);
    if(input==="") 
    {
        alert("Please fill out this field ⚠️");
        document.getElementById("input_box").value="";
    }
    else if(!Number.isInteger(num)||num<=0)
    {
        alert("⚠️ Please enter a valid number of questions!");
        document.getElementById("input_box").value="";
    }
    else if(num>20)
    {
        alert("⚠️Enter the value less than 20");
        document.getElementById("input_box").value="";
    }
    else
    {
        localStorage.setItem("total_questions",num);
        window.location.href ="index.html";
    }
}
function create_number(digits) {
    let ans=0;
    let r;
    for(let i=0;i<digits;i++)
    {
        r=Math.floor((Math.random())*(9))+1;
        ans=ans*10+r;
    }
    return ans;
}
function create_question() {
    let digit_1=Math.floor(Math.random()*3)+1;
    let digit_2=Math.floor(Math.random()*3)+1;
    let n1=create_number(digit_1);
    let n2=create_number(digit_2);
    let operator_index=Math.floor(Math.random()*2)+1;
    let operator;
    if(operator_index==1)
        operator='+';
    if(operator_index==2)
        operator='-';
    let complete_question=n1+" "+operator+" "+n2;
    let ans;
    if(operator=='+')
        ans=n1+n2;
    if(operator=='-')
        ans=n1-n2;
    right_answer=ans;
    return "🤔 "+complete_question;
}
function print_question() {
    
    ti=10;
    document.getElementById("game").style.visibility="hidden";
    if(number_of_questions==0)
    {
        document.getElementById("clock").style.visibility="hidden";
        document.getElementById("question").style.visibility="hidden";
        document.getElementById("answer").style.visibility="hidden";
        document.getElementById("next").style.visibility="hidden";
        document.getElementById("Correct_answers").innerHTML="You have scored "+correct_answers+" out of "+temp+`<br>`+"Well done!🎉🎉";
    }
    let question=create_question();
    document.getElementById("question").innerHTML=question;
    number_of_questions--;
}
function check() {
    let user_answer=Number(document.getElementById("answer").value);
    document.getElementById("answer").value="";
    if(user_answer==right_answer)
    {
        correct_answers++;
        right_answer=10000;
    }
}
function print_time()
{
    setInterval(() => {
        ti--;
        document.getElementById("time").innerHTML=ti;
    }, 1000);
}
function starting()
{
    number_of_questions=localStorage.getItem("total_questions");
    temp=number_of_questions
    print_question();
    ti=9;
    document.getElementById("time").innerHTML=9;
    interval=setInterval(print_question,10000);
    document.getElementById("answer").style.visibility="visible";
    document.getElementById("next").style.visibility="visible";
    print_time();
}