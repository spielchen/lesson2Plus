var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//console.log((week[0])+"\n"+(week[1])+"\n"+(week[2])+"\n"+(week[3])+"\n"+(week[4])+"\n"+(week[5])+"\n"+(week[6]));

for(var i=0; i < week.length-2; i++){
	console.log((week[i])+"\n");
}

console.log('%c%s', 'font: italic bold 1.3em/1 Arial', week[5]);
console.log('%c%s', 'font: bold 1.3em/1 Arial', week[6]);

var numbers = ["3343", "43434", "5646", "1231", "675354", "6777", "7777", "3333"];

for (i=0; i<numbers.length; i++){
	var firstNum = numbers[i].charAt(0);
	if( firstNum=="3"){
	console.log(numbers[i]);
	}
		if( firstNum=="7"){
	console.log(numbers[i]);
	}
	
}





 
