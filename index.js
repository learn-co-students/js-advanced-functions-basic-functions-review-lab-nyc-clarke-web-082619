// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity = "go to the office") {
    return`This Monday, I will ${activity}.`;
}

function wrapAdjective (paramOuter = "*") {
    return function(paramInner = "special") {
        return `You are ${paramOuter}${paramInner}${paramOuter}!`;
    }
}

const Calculator = {
    add: function(a,b) {return a+b;},
    subtract: function(a,b){return a-b;},
    multiply: function(a,b){return a*b;},
    divide: function(a,b){return a/b;}
};

function actionApplyer(number, arrayFunctions) {
    if (arrayFunctions.length ==0) 
        return 0;
    else {
        let result = number;
        arrayFunctions.forEach(func => {
            result = func(result);
        });
        return result;
    }     
}