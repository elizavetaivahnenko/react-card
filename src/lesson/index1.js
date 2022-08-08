function getNumber(resolve, reject) {
	const num = Math.random();
	if (Math.random() >= 0.5) {
		console.log(num)
		resolve('ok')
	} else {
		reject(new Error('error get number'))
	}
}
const setPromises = [];
for (let i = 0; i < 10; i++){
	setPromises[i]=new Promise(getNumber);
}
makePromises();
async function makePromises() {
	try {
		const result = await Promise.all(setPromises); //метод ждет выполнение всего обещания
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}
// param-set promise
// Promise.all() ждет когда все выполнятся успешно если нет-прекращает выполнение
// Promise.race() ждет когда первый ближайший промис выполнится
// Promise.allSerrled()- вернет весь набор промисов состатусами и ему не важно успешен он или нет