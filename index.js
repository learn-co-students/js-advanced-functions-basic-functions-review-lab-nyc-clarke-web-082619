// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(sign="*"){
    return function result(string){
        return `You are ${sign}${string}${sign}!`;
    }
}

let Calculator = {
    add: function add(){ return 1+3 },
    subtract: function subtract(){ return 1-3 },
    multiply: function multiply(){ return 1*3 },
    divide: function divide(){return 10/5}
}

function actionApplyer(startPoint, functions){
    if (functions.length === 0){
        return startPoint;
    }else {
        for(let i=0; i<functions.length; i++){
            startPoint = functions[i](startPoint);
        }
        return startPoint;
    }
    
}