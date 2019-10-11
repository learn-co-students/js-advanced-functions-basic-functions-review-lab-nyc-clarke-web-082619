// Your code here
function saturdayFun(something = "roller-skate"){
    return `This Saturday, I want to ${something}!` ;
}

function mondayWork(something = "go to the office"){
    return `This Monday, I will ${something}.`
}

function wrapAdjective(symbol = "*"){
    return function (something){
        return `You are ${symbol}${something}${symbol}!`
    }
}

let Calculator = {
    add: function(num1, num2){
    return num1+num2;
}, 
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2; 
    },
    divide: function(num1, num2){
        return num1/ num2;
    }
};

function actionApplyer(number, array){
    console.log(array)
    if(array.length < 1){
        return 0;
    }else{
        return array.map(item => number =item(number))[array.length-1];   
    }
}

