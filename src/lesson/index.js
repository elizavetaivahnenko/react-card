const promise = new Promise(fun1);

function fun1(resolve, reject) {
	console.log('Hello');
}

// const promise2 = new Promise(
// 	function (resolve, reject) {
// 		console.log('hello')
// 	}
// ) bad way



const getAuthUserPromise = new Promise(getAuthUser)
const isAuth = true;
const currentUser={name:'Test', surname:'Testovich'};

function getAuthUser(resolve, reject) {
	if (isAuth) {
		return(currentUser)
	} else {
		reject(error);
	}
}

const isIHaveEnughMoney = true;
const buyNewPhonePromise = new Promise(getPhone);

function getPhone(resolve, reject) {
	if (isIHaveEnughMoney) {
		const phone = {
			model: 'modelX'
		}
		resolve(phone);

	} else {
		const reject = new Error('try again...');
		reject(reason)
	}
}

//2
async function showMyNewCoolPhone(phone) {
	const showNewPromise = new Promise(showForFriend);
	function showForFriend(resolve, reject) {
		if (phone) {
			const msg = 'Hello, I have a new phone ${phone.model} ${phone.year}'
			resolve(msg);
		}
		else {
			const promiseMsg = 'I have to save money';
			reject(promiseMsg)
		}
	}
}
//connect
async function buy() {
	try {
		const phone = await buyNewPhonePromise;
		const msg = await showMyNewCoolPhone(phone);
	} catch (error) {
		console.log(error);
	}
}

//let's call function (bad way)
buy();
//second good way async
(async () => { await buy(); })();
// () - parametr усли бы функция зависила от икса и игрика например


