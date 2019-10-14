// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(flair = '*'){
    return function(def = 'special'){
        let str = "You are"
        return `${str} ${flair}${def}${flair}!`
    }
}
let Calculator = {};
Calculator.add = function(a,b){
    return parseInt(a + b);
}
Calculator.subtract = function(a,b){
    return parseInt(a-b);
}
Calculator.multiply = function(a,b){
    return parseInt(a*b);
}
Calculator.divide = function(a,b){
    return parseInt(a/b);
}

function actionApplyer(start, array){
    for(let i = 0; i < array.length; i++){
         start = array[i](start);
    }
    return start;
}