function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function innerFcn(param="special"){
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a+b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(integerStart, fcnArray){
    let result = integerStart;
    for (let i = 0; i < fcnArray.length; i++){
        result = fcnArray[i](result)
    };
    return result
}