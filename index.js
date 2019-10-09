// Your code here

function saturdayFun(activity='roller-skate'){

    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(adj='special'){
        return `You are ${flair}${adj}${flair}!`
    }
}


const Calculator = {

    add: function(x, y){
        return x + y;
    },

    subtract: function(x, y){
        return x - y
    },

    multiply: function(x, y){
        return x * y
    },

    divide: function(x, y){
        return x / y
    }

};

function actionApplyer(startInt, funcArray=[]){
    if (funcArray.length == 0){
        return startInt;
    } else {

        let currentInt = startInt;

        for (let i = 0; i < funcArray.length; i++){
            currentInt = funcArray[i](currentInt);
        }

        return currentInt


    }
}