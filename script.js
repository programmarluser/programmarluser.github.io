let a = prompt('Введите а');

let b = prompt('Введите b');

let c = prompt('Введите с');

let uravnenie = alert('Ваше уравнение: ' + a + 'x' + b + 'x' + c + ' = 0');
	
let d = Math.sqrt(b**2 - 4 * a * c);

if (d == 0) {
	alert('Дискриминант равен нулю, решений нет!')
	}
	else {
	alert(d);
	
	let x1 = (-b + d)/(2 * a);
	let x2 = (-b - d)/(2 * a);

	alert('Ответ: '+'x1 = '+x1+','+' x2 = '+x2)
}

