function fibonacci(num) {
// your code here
	let fir = 0
	let sec = 1
	if(num<=1) return fir
	for(let i=2;i<num;i++){
		let temp = sec
		sec = sec+fir
		fir = temp
	}
	return sec
}

module.exports = fibonacci;
