function saturdayFun(arg='roller-skate') {
    return `This Saturday, I want to ${arg}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair='*') {
    return function(description='special') {
        return `You are ${visualFlair}${description}${visualFlair}!`
    }
}

let Calculator = {
    add: function (num1, num2) {
        return num1 + num2 
    },
    subtract: function (num1, num2) {
        return num1 - num2 
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    },  
}

const  arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

function actionApplyer(start, arrayOfTransforms) {
    if (arrayOfTransforms.length === 0){return start}
    else {return arrayOfTransforms[2](arrayOfTransforms[1](arrayOfTransforms[0](start)))}
}
