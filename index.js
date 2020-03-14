// Your code here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

saturdayFun()  

function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
};
mondayWork()

function wrapAdjective(flair="*") {
    return function(par= "special"){
        return `You are ${flair}${par}${flair}!`
    }
};
wrapAdjective()

const Calculator = {
    add: function(num1, num2){
        return num1 + num2;
    },

    subtract: function(num1, num2){
        return num1 - num2;
    },

    multiply: function(num1, num2){
        return num1 * num2;
    },

    divide:function(num1, num2){
        return num1 / num2;
    }
};

function actionApplyer(start, arr) {
    for (let i = 0; i < arr.length; i++ ){
      start= arr[i](start);
    };
  return start
  };
  