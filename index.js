function saturdayFun(activity = 'roller-skate') { 
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (flair='*') { 
    return function (param='special'){
        return  `You are ${flair}${param}${flair}!`
    }
}

let Calculator = { 
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3}, 
    divide: function(){return 10 / 5} 
}
 
function actionApplyer(startingInt, array) { 
    let a = startingInt;

    for (let i = 0; i < array.length; i++){ 
        a = array[i](a)
    }
    return a; 
}