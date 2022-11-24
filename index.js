// code your solution here
let activity;
let work;

//Saturday activity function
function saturdayFun (activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}

//Function expresiion
const mondayWork = function (work = "go to the office"){
    return (`This Monday, I will ${work}.`);
}

//Wrap Adjective

function wrapAdjective(mark = "*") {
    const part1 = "You are";
    return function (message = "special") {
        return (`${part1} ${mark}${message}${mark}!`);
    };
};