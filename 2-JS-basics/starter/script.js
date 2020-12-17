/*****************************
* CODING CHALLENGE 1
*/

/* var massMark, massJohn;
var heightMark, heightMark;
var BMI_Mark, BMI_John;
var isHigher;

massMark = 78, massJohn = 92;
heightMark = 1.69, heightJohn = 1.95;

BMI_Mark = massMark / (heightMark * heightMark);
BMI_John = massJohn / (heightJohn * heightJohn);
console.log(BMI_Mark, BMI_John);

isHigher = BMI_Mark > BMI_John;

console.log("Is Mark's BMI higher than John's?" + ' ' + isHigher);
*/

/*****************************
* CODING CHALLENGE 2
*/

/* var teamJohn1 = 89, teamJohn2 = 120, teamJohn3 = 103; //312
var teamMike1 = 116, teamMike2 = 94, teamMike3 = 123; //333

// 1 - Average score of each team
var avgJohn = (teamJohn1 + teamJohn2 + teamJohn3) / 3;
var avgMike = (teamMike1 + teamMike2 + teamMike3) / 3;

console.log(avgJohn, avgMike);

// 2 - Decide which team wins in average

if (avgJohn > avgMike) {
    console.log('John\'s team scored higher than Mike\'s. ' + avgJohn + ' to '  + avgMike + '.');
} else if (avgJohn === avgMike) {
    console.log('There is a draw between both teams');
} else {
    console.log('Mike\'s team scored higher than John\'s. ' + avgMike + ' to ' + avgJohn + '.');
}

// 3 - Change Score

teamJohn1 = 150; //teamJohn in total = 373
avgJohn = (teamJohn1 + teamJohn2 + teamJohn3) / 3; //124.(3)

if (avgJohn > avgMike) {
    console.log('John\'s team scored higher than Mike\'s. ' + avgJohn + ' to '  + avgMike + '.');
} else if (avgJohn === avgMike) {
    console.log('There is a draw between both teams');
} else {
    console.log('Mike\'s team scored higher than John\'s. ' + avgMike + ' to ' + avgJohn + '.');
}

teamJohn1 = 89;
teamMike1 = 89, teamMike2 = 120, teamMike3 = 103;
var avgJohn = (teamJohn1 + teamJohn2 + teamJohn3) / 3;
var avgMike = (teamMike1 + teamMike2 + teamMike3) / 3;

if (avgJohn > avgMike) {
    console.log('John\'s team scored higher than Mike\'s. ' + avgJohn + ' to '  + avgMike + '.');
} else if (avgJohn === avgMike) {
    console.log('There is a draw between both teams. Score: ' + avgJohn);
} else {
    console.log('Mike\'s team scored higher than John\'s. ' + avgMike + ' to ' + avgJohn + '.');
}

// 4 & 5 - The same as 2 but with Mary's team

var teamMary1 = 111, teamMary2 = 120, teamMary3 = 103;
var avgMary = (teamMary1 + teamMary2 + teamMary3) / 3;
avgMike = 200
//console.log(avgJohn===avgMary && avgMary===avgMike);

if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary\'s team scored higher than John\'s and Mike\'s. ' + 
    'Mary\'s team: ' + avgMary + ' John\'s team: ' + avgJohn + ' Mike\'s team: '+ avgMike);
} else if (avgJohn === avgMary && avgMary=== avgMike) {
    console.log('There is a draw between all the teams. Score: ' + avgMary);
} else if (avgJohn > avgMary && avgJohn > avgMike) {
    console.log('John\'s team scored higher than Mary\'s and Mike\'s. ' + 
    'Mary\'s team: ' + avgMary + ' John\'s team: ' + avgJohn + ' Mike\'s team: '+ avgMike);
} else if (avgMike > avgMary && avgMike > avgJohn) {
    console.log('Mike\'s team scored higher than Mary\'s and John\'s. ' + 
    'Mary\'s team: ' + avgMary + ' John\'s team: ' + avgJohn + ' Mike\'s team: '+ avgMike);
} else {
    console.log('No clear winner in sight. At least one draw! ' +
    'Mary\'s team: ' + avgMary + ' John\'s team: ' + avgJohn + ' Mike\'s team: '+ avgMike);
}
*/

/*****************************
* CODING CHALLENGE 3
*/

/* var billsArray = [124, 48, 268];
//var billsArray = [50, 50, 268];

var tipCalculator = function(bill){
    switch(true){
        case bill < 50:
            console.log('A');
            return bill *= 0.2;
        case bill >= 50 && bill <= 200:
            console.log('B');
            return bill *= 0.15;
        default:
            console.log('C');
            return bill *= 0.1; 
    }
}

tipCalculator(billsArray[0]);
tipCalculator(billsArray[1]);
tipCalculator(billsArray[2]);
var calcTips = [tipCalculator(billsArray[0]), tipCalculator(billsArray[1]), tipCalculator(billsArray[2])];

var paidAmounts = [calcTips[0] + billsArray[0], calcTips[1] + billsArray[1], calcTips[2] + billsArray[2]];

console.log(calcTips);
console.log(paidAmounts); */

/*****************************
* CODING CHALLENGE 4
*/

/*var john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
};

var mark = {
    fullname: 'Mark Twain',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
};

var getHighestBMIPerson = function(obj1, obj2) {

    obj1.calcBMI(), obj2.calcBMI();
    console.log(obj1);
    console.log(obj2);
    switch (true) {
        case obj1.BMI > obj2.BMI:
            console.log(obj1.fullname, obj1.BMI)
            return obj1;
        case obj2.BMI > obj1.BMI:
            console.log(obj2.fullname, obj2.BMI)
            return obj2;
        default:
            console.log('DRAW:', obj1.BMI)
            return obj1;
    }
}

getHighestBMIPerson(john, mark); */

/*****************************
* MINI CHALLENGE 1
*/

/* var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {
    if (typeof(john[i]) !== 'string') continue;
    console.log(john[i]);
} */

/*****************************
* CODING CHALLENGE 5
*/

john = {
    fullname: 'John Smith',
    billsArray: [124, 48, 268, 180, 42],
    tipsArray: [],
    finalPaidAmount : [],
    tipsCalculator: function(){
        for (var i = 0; i < this.billsArray.length; i++){
            switch(true){
                case this.billsArray[i] < 50:
                    this.tipsArray.push(this.billsArray[i] * .2);
                    this.finalPaidAmount.push(this.tipsArray[i] + this.billsArray[i]);
                    continue;
                case this.billsArray[i] >= 50 && this.billsArray[i] <= 200:
                    this.tipsArray.push(this.billsArray[i] * .15);
                    this.finalPaidAmount.push(this.tipsArray[i] + this.billsArray[i]);
                    continue;
                case this.billsArray[i] > 200:
                    this.tipsArray.push(this.billsArray[i] * .1);
                    this.finalPaidAmount.push(this.tipsArray[i] + this.billsArray[i]);
                    continue;
            }
        }
    }
};

john.tipsCalculator();
console.log(john.tipsArray);
console.log(john.finalPaidAmount);

mark = {
    fullname: 'Mark Miller',
    billsArray: [77, 375, 110, 45],
    tipsArray: [],
    finalPaidAmount : [],
    tipsCalculator: function(){
        for (var i = 0; i < this.billsArray.length; i++){
            switch(true){
                case this.billsArray[i] < 100:
                    this.tipsArray.push(this.billsArray[i] * .2);
                    this.finalPaidAmount.push(this.tipsArray[i] + this.billsArray[i]);
                    continue;
                case this.billsArray[i] >= 100 && this.billsArray[i] <= 300:
                    this.tipsArray.push(this.billsArray[i] * .1);
                    this.finalPaidAmount.push(this.tipsArray[i] + this.billsArray[i]);
                    continue;
                case this.billsArray[i] > 300:
                    this.tipsArray.push(this.billsArray[i] * .25);
                    this.finalPaidAmount.push(this.tipsArray[i] + this.billsArray[i]);
                    continue;
            }
        }
    }
};

mark.tipsCalculator();
console.log(mark.tipsArray);
console.log(mark.finalPaidAmount);

var avgTips = function(tipArray) {
    var sum = 0;
    for (var i = 0; i < tipArray.length; i++){
        sum += tipArray[i]; 
    }
    return sum / tipArray.length;
}

john.AVGTips = avgTips(john.tipsArray);
mark.AVGTips = avgTips(mark.tipsArray);

if (john.AVGTips > mark.AVGTips) {
    console.log('John\'s family spent more money on average on tips: ' + john.AVGTips);
} else if (john.AVGTips < mark.AVGTips){
    console.log('Mark\'s family spent more money on average on tips: ' + mark.AVGTips);
} else {
    console.log('Both families spent the same amount of money on average on tips: ' + mark.AVGTips);
}

console.log(john);
console.log(mark);