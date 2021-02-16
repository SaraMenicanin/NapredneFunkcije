// task1 
function Students(name,lastName,age,avgGrade){
	this.name=name;
	this.lastName=lastName;
	this.age=age;
	this.avgGrade=avgGrade;
}
var sara=new Students("Sara","Menicanin",22,9.0);
var tamara=new Students("Tamara","Djokic",25,8.6);
var sinisa=new Students("Sinisa","Menicanin",19,8.0);
console.log(sara,tamara,sinisa)

//task2
function Statistics(name,age,goals,yellowCards){
	this.name=name;
	this.age=age;
	this.goals=goals;
	this.yellowCards=yellowCards;
}
var player1=new Statistics("Messi",35,189,50);
var player2=new Statistics("Pique",30,123,22);
var player3=new Statistics("Ronaldo",38,255,59);
var player4=new Statistics("Maradona",59,500,32);
console.log(player1,player2,player3,player4)

//task3 
var players=[["Ronaldo",38,255,59],["Messi",35,189,50],["Pique",30,123,22],["Maradona",59,500,32]];
var newPlayers=[];
function Statistics(name,age,goals,yellowCards){
	this.name=name;
	this.age=age;
	this.goals=goals;
	this.yellowCards=yellowCards;
}
for (var i = 0; i < players.length;i++){
newPlayers[newPlayers.length]=new Statistics(players[i][0],players[i][1],players[i][2],players[i][3]);
}
console.log(newPlayers)
//task4
function Numbers(firstNumber,secondNumber,calculation){
	this.firstNumber=firstNumber;
	this.secondNumber=secondNumber;
	this.calculation=calculation;
}
var firstInstance= new Numbers(13,3,function(){return this.firstNumber*this.secondNumber;});
var secondInstance=new Numbers(45,34,function(){return this.firstNumber/this.secondNumber;});
var thirdInstance= new Numbers(10,5,function(){return this.firstNumber+this.secondNumber;});
var fourthInstance= new Numbers(100,2,function(){return this.firstNumber-this.secondNumber;});
console.log(firstInstance.calculation());
console.log(secondInstance.calculation());
console.log(thirdInstance.calculation());
console.log(fourthInstance.calculation());
