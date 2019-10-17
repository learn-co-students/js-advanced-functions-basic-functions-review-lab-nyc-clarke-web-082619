// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string = "*") {
  return function(special = "special") {
    return `You are ${string}${special}${string}!`;
  };
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

function actionApplyer(startingInt, array) {
  let a = startingInt;
  for (let i = 0; i < array.length; i++) {
    a = array[i](a);
  }
  return a;
}
