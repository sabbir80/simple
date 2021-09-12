var is_first = 0;
var prev_value = 0;
var current_operator;
var current_value='0';

document.getElementById('edu').value = '0';


function dis(value){

	if (value === '0' || value=== '1' || value=== '2' || value=== '3' || value=== '4' || value=== '5' || value=== '6' || value=== '7' || value=== '8' || value === '9'){
		if(current_value == 0 || current_value == '0' || current_value == ''){
			current_value = '' + value;
		}
		else{
			current_value += value;
		}

		document.getElementById('edu').value = current_value;
	}

	else if (value === '-' || value === '+' || value === '*' || value === '/' || value === '%'){

		if (current_operator){
			equation = prev_value + current_operator + current_value;
			console.log(equation);
			res = eval(equation);
			document.getElementById('edu').value = res;
			prev_value = res;
			current_value = '0';
			current_operator = value;
		}
		else{
			prev_value = current_value;
			current_value = '0'
			current_operator = value;
			document.getElementById('edu').value = prev_value;
		}
	}
}
//function for evaluation
function solve()
{
	if (prev_value && current_value && current_operator){
		document.getElementById('edu').value = eval(prev_value + current_operator + current_value);
	}
	else{
		document.getElementById('edu').value = current_value;
	}
}
//function for clearing the display
function clr()
{		
	document.getElementById('edu').value = '0';
	current_value = '0';
	prev_value = '0';

}