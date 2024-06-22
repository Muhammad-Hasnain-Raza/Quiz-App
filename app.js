var question = [
    {
    question: `Q : Which type of JavaScript language is ___`,
    option1: `Object-Oriented`,
    option2: `Object-Based`,
    option3: `Assembly-language`,
    corrAnswer:`Object-Based>`,
    },
    {
    question: `Q : Which one of the following also known as Conditional Expression:`,
    option1: `Switch statement`,
    option2: ` If-then-else statement`,
    option3: `immediate if`,
    corrAnswer:`immediate if`,
    },
    {
    question: "Q : Which tag is used to make element unique ",
    option1: "id",
    option2: "class  ",
    option3: "label",
    corrAnswer: "id",
    },
    {
    question: `Q : In JavaScript, what is a block of statement?`,
    option1: `Conditional block`,
    option2: 'block that combines a number of statements into a single compound statement',
    option3: 'block that contains a single statement',
    corrAnswer:`block that combines a number of statements into a single compound statement`,
    },
    {
    question: `Q : The "function" and " var" are known as:`,
    option1: `Keywords`,
    option2: `Data types`,
    option3 :`Declaration statements`,
    corrAnswer:`Declaration statements`,
    },
    {
    question: "Q : In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
    },
    {
    question: 'Q : Which of the following number object function returns the value of the number?',
    option1: "toString()",
    option2: "valueOf()",
    option3: "toLocaleString()",
    corrAnswer: "valueOf()",
    },
    {
    question: "Q : In JavaScript the x===y statement implies that: ",
    option1: "Both x and y are equal in value, type and reference address as well.",
    option2: "Both are x and y are equal in value only.",
    option3: "Both are equal in the value and data type.",
    corrAnswer: "Both are equal in the value and data type.",
    },
    {
    question: "Q : In JS Data types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
    },
   
    {
    question: "Q : Which one of the following is an ternary operator: ",
    option1: "?",
    option2: "+",
    option3: ":",
    corrAnswer: "?",
    },
];
  
   var ques = document.getElementById('ques');
   var option1 = document.getElementById('opta');
   var option2 = document.getElementById('optb');
   var option3 = document.getElementById('optc');
   var btn = document.getElementById('btn');
   var timer = document.getElementById('timer');
   var index = 0;
   var score = 0;
   var min = 4;
   var sec = 59;
  
  var interval = setInterval(function(){
      timer.innerHTML = `${min}:${sec}`;
      sec--;
      if(sec == 0){
          min--;
          sec = 59;
      }
      if(min <0){
          min = 4;
          sec = 59;
          nextQuestion();
      }
   },100)
  
   function nextQuestion(){
      var getOptions = document.getElementsByName('option');
  
      for(var i=0 ; i < getOptions.length; i++){
          if(getOptions[i].checked){
              var selectedAns = getOptions[i].value;
              var selectedQues = question[index -1].question;
              var selectedOpt = question[index -1][`option${selectedAns}`];
              var correctAns = question[index-1]['corrAnswer'];
  
              if(selectedOpt == correctAns){
                  score++;
              }
          }
          getOptions[i].checked = false;
      }
      btn.disabled = true;
  
      if(index > question.length-1){
        Swal.fire({
            title: "Good job!",
            text: `Your Percentage is ${((score / question.length) * 100).toFixed(2)}`,
            icon: "success"
          });
               
              clearInterval(interval)
      }
      else{
          ques.innerText = question[index].question;
          opta.innerText = question[index].option1;
          optb.innerText = question[index].option2;
          optc.innerText = question[index].option3;
          index++;
          min = 4;
          sec = 59;
      }
   }
  
   function target() {
      btn.disabled = false;
    }
  