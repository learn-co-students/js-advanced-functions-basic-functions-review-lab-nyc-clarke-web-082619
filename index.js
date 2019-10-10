// Your code here
function wrapAdjective(v = "*"){
    return function(s = "special"){
        return `You are ${v}${s}${v}!`;
    }
}

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

let Calculator= {
    add: function(a,b){return a+ b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b}
}

function actionApplyer(a, arr){
    if(arr.length === 0){
        return a;
    }
    let result = arr[2](arr[1](arr[0](a)));
    //return `(${a}, multiplied by 2, added to 1000 and then modulo 7 is ${result}.  Apply each function in the Array of functions on the given base (${a}) OR on the result of the use of the previous function to get this result`
    return result;
}